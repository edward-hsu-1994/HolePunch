<p align="center">
  <a href="https://github.com/XuPeiYao/HolePunch">
    <img src="docs/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">HolePunch</h3>

  <p align="center">
    連線代理服務.
    <br />
    <br />    
    <a href="https://github.com/XuPeiYao/HolePunch/blob/master/LICENSE">條款</a>
    ·
    <a href="https://github.com/XuPeiYao/HolePunch/issues">回報錯誤</a>
    ·
    <a href="https://github.com/XuPeiYao/HolePunch/issues">功能請求</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>目錄</summary>
  <ol>
    <li>
      <a href="#關於本專案">關於本專案</a>
      <ul>
        <li><a href="#為何而做">為何而做</a></li>
        <li><a href="#使用技術">使用技術</a></li>
      </ul>
    </li>
    <li>
      <a href="#快速上手">快速上手</a>
      <ul>
        <li><a href="#前置需求">前置需求</a></li>
        <li><a href="#安裝">安裝</a></li>
      </ul>
    </li>
    <li><a href="#使用教學">使用教學</a></li>
    <li><a href="#條款">條款</a></li>
  </ol>
</details>

## 關於本專案

透過實作TCP Proxy將外部Port代理至內部容器的Port，且搭配SignalR，使用連線中的使用者IP作為外部Port的存取白名單。

**透過SignalR的連線狀態管制那些來源可以建立連線。**

### 為何而做

**這個專案是為了讓我在遠端連接自己部落格資料庫可以更方便。**

至於為何我不直接使用SSH Tunnel的方式，是因為我使用的Visual Studio擴充元件: [Npgsql PostgreSQL Integration](https://marketplace.visualstudio.com/items?itemName=RojanskyS.NpgsqlPostgreSQLIntegration) 並不直接支援SSH Tunnel，需要自行開Tunnel。

除了用SSH Tunnel方法連接，也可以將連接Client的IP作為Firewall的白名單，但由於我使用的網路環境是動態IP，每次都要重新設定白名單反而比SSH Tunnel更麻煩。

綜合上述，這個專案實作了TCP Proxy，並透過SignalR取得連線列表作為白名單，另外實作了簡單的管理功能。

### 使用技術

* ASP.NET Core MVC
* ASP.NET Core SignalR
* Angular
* Docker

## 快速上手

使用以下步驟快速建構服務。

### 前置需求

* Docker 
* PostgreSQL

### 安裝

#### 環境變數

## 使用教學

## 條款

依據MIT許可證分發。有關詳細訊息，請查看`LICENSE`。