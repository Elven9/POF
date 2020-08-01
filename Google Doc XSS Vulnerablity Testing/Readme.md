# Google Doc XSS Vulnerability Testing

[LiveOverflow Youtube Video Link](https://www.youtube.com/watch?v=aCexqB9qi70)

## Start up

```sh
# start up trusted site
http-server TrustedSitePublic -p 3000

# start up malicious one
http-server MaliciousSitePublic -p 3001
```

## 運作原理

其實還滿簡單的，攻擊者可以透過 `postMessage` 這個 function 可以擋掉 CORS 的特性，做到讓使用者很自然地使用 trusted site 的服務，但其實背景裡 malicious site 裡的東西會 trigger trusted site 去 load malicious script 並把資料送回去給 c2 server