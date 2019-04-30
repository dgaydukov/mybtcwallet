# React QuickStart


## Content
* [Description](#description)
* [How to use cold storage](#how-to-use-cold-storage)
* [Installation](#installation)
* [Built With](#built-with)
* [Authors](#authors)

### Description

This is my approach to create bitcoin cold wallet like the [mew](https://www.myetherwallet.com/). The wallet will do everything related to bitcoins:
* 1. Generate keys, simple keys and hd wallets
* 2. Sing/verify messages
* 3. Sign transactions. Here is the most interesting part. As we all know, in order to create bitcoin tx, we need to pass all [utxo](https://www.investopedia.com/terms/u/utxo.asp) of addresses we want to spend.
So we will have an additional website [mycryptoexplorer](https://mycryptoexplorer.com) to fetch all utxos for a list of addresses. Plus you will also be able to download currect rate (satoshis per byte), in order to set tx execution speed. 
You generate hd wallet and then 10 addresses based on it. Receive money on them. And after some time want to spend them. You go to website, upload 10 addresses, download all utxos for them. Then go to your cold storage (usb with encrypted os),
open mybtcwallet, upload downloaded file with utxos, insert your hd private key, input baserate, and get you generated tx. Then just scan qr code from your phone, and broadcast tx.

### How to use cold storage

The best way is to use hardware wallet like [ledger](https://www.ledger.com/), or any other. Just google, read reviews and choose you like the most.
There is also an option with bootable usb stick. This stick can also be used to store your other sensitive data (like passwords or personnal photos).
So usually on this bootable usb stick you have a copy of mew website, that you use as cold storage.

### Installation

As I'm a linux user, this project is best works with linux, but it can work in windows environment too.
In order to install run following steps: 

* Clone repository ```git clone https://github.com/dgaydukov/mybtcwallet```
* Go to react ```cd mybtcwallet```
* Install ```npm i```
* Run and enjoy ```npm start```

You can also this app as docker container
```shell
cp .env.tpl .env
docker-compose up -d --build
```

In case you want to run webpack server then `npm run webpack`

### Built With

* [React quickstart](https://github.com/dgaydukov/react-quickstart) - this project is based on my quickstart project
* [BitcoinjsLib](https://github.com/bitcoinjs/bitcoinjs-lib) - library to work with bitcoin



### Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)


### Plan
1. Generate keys/hd wallet/password protected wallets/bulk wallets
2. Sign/verify any message
3. Sign tx based on input file
4. download keyfile like mew