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
    ·
    <a href="https://hub.docker.com/repository/docker/xupeiyao/holepunchweb">DockerHub頁面</a>
    <br/>
    <img alt="Build" src="https://github.com/XuPeiYao/HolePunch/actions/workflows/build.yml/badge.svg">
    <img alt="Docker Image Version (latest semver)" src="https://img.shields.io/docker/v/xupeiyao/holepunchweb">
    <img alt="Docker Pulls" src="https://img.shields.io/docker/pulls/xupeiyao/holepunchweb">    
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

1. 建立空的PostgreSQL資料庫
2. 佈署容器

```bash
docker run -d --name holepunch --network="host" -e "HolePunch_CONN_PG=<YOUR POSTGRESQL CONN STR>" xupeiyao/holepunchweb
```

3. 瀏覽`http://localhost`，預設帳號為`admin`，密碼為`admin`

#### 環境變數

以下為目前提供的所有環境變數設定:

|         Env Name         | Required |                             Description                             |
|:-------------------------|:--------:|:--------------------------------------------------------------------|
| HolePunch_CONN_PG        |     ✔️    | 資料庫連線字串                                                      |
| HolePunch_FORWARD_HEADER |          | 若有使用HTTP SERVER轉發，則需要在此設定信任的Client Real IP的header |
| HolePunch_JWT_ISS        |          | JWT issuer                                                          |
| HolePunch_JWT_AUD        |          | JWT audience                                                        |
| HolePunch_JWT_SEC        |          | JWT密鑰字串，將自動做SHA512                                         |
| ASPNETCORE_URLS          |          | 若欲變更預設的Http FQDN與Port，可以使用這個變數替換，如: `http://+:7777`，將Port變更為7777 |

## 使用教學

1. 瀏覽至登入畫面(預設為`http://localhost`)

![Imgur](https://imgur.com/NgEcWeo.png)

2. 登入後若SignalR連線正常則將顯示如下

![Imgur](https://imgur.com/0rvvebs.png)

3. 點選`Go Dashboard`進入控制台(僅管理者成員)，初始時並不會有任何服務

![Imgur](https://imgur.com/3nVOqCC.png)

4. 點選`Add Service`按鈕，輸入服務資訊後儲存，**Port若為0，則表示當服務啟動時將隨機選擇Port**

![Imgur](https://imgur.com/EID85YU.png)

5. 上一個步驟儲存後，原本鎖定的`Forward Target`與`Allow Rules`選項就會解鎖。首先點選`Forward Target`選項，設定Proxy的目標並儲存。

![Imgur](https://imgur.com/aNioous.png)

6. 在同畫面中選擇`Allow Rules`選項，選擇這個服務容許連線的條件，若是選擇`User`或`User Group`，擇要連線時則需要先開啟網頁至步驟2的畫面才可以連接。

![Imgur](https://imgur.com/MHbNh1y.png)

7. 點選`Add User`並選擇目前使用者。

![Imgur](https://imgur.com/0AE8G9a.png)

8. 回到Service列表或點選Properties選項將Enabled選擇啟用

![Imgur](https://imgur.com/oKQbLv5.png)

9. 點選右上角的`Exit dashboard`按鈕回到步驟2並維持開畫面，使用連線工具連線至剛才設定的服務。**若是連線頁面被關掉則與該帳號關聯的連線會被中斷**

## 條款

依據MIT許可證分發。有關詳細訊息，請查看`LICENSE`。