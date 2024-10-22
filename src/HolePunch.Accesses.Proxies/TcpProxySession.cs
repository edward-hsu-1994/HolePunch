﻿using HolePunch.Proxies;

using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Accesses.Proxies
{
    public class TcpProxySession : IProxySession
    {
        private readonly TcpClient _client;

        private TcpClient _forwardClient;

        private IPEndPoint _forwardEndPoint;
        private IPEndPoint _clientEndPoint;
        private ProxySessionStatus _status;

        public event Action<IProxySession> OnConnected;
        public event Action<IProxySession> OnDisconnected;


        public TcpProxySession(IPEndPoint forwardEndPoint, TcpClient client)
        {
            Id = Guid.NewGuid();
            _forwardEndPoint = forwardEndPoint;
            _client = client;
            _clientEndPoint = _client?.Client?.RemoteEndPoint as IPEndPoint;
        }

        public Guid Id { get; private set; }
        public IPEndPoint ClientEndPoint => _clientEndPoint;

        public IPEndPoint ForwardEndPoint => _forwardEndPoint;

        public ProxySessionStatus Status => _status;


        public async Task Connect()
        {
            _status = ProxySessionStatus.Booting;

            _forwardClient = new TcpClient();

            try
            {
                await _forwardClient.ConnectAsync(_forwardEndPoint.Address, _forwardEndPoint.Port);
            }
            catch
            {
                await Disconnect();
                return;
            }

            _ = Task.Run(async () =>
            {
                try
                {
                    _status = ProxySessionStatus.Running;

                    var fromSourceStream = _client.GetStream();
                    var toTargetStream = _forwardClient.GetStream();

                    // 連線對接
                    await Task.WhenAny(
                        fromSourceStream.CopyToAsync(toTargetStream),
                        toTargetStream.CopyToAsync(fromSourceStream));
                }
                catch
                {
                    await Disconnect();
                    return;
                }
                await Disconnect();
            });

            OnConnected?.Invoke(this);
        }

        public async Task Disconnect()
        {
            _status = ProxySessionStatus.Closing;

            try
            {
                _client.Close();
                _client.Dispose();
            }
            catch { }

            try
            {
                _forwardClient.Close();
                _forwardClient.Close();
            }
            catch { }

            _status = ProxySessionStatus.Shutdown;

            OnDisconnected?.Invoke(this);
        }
    }
}
