# React QuickStart


## Content
* [Description](#description)
* [Installation](#installation)
* [Built With](#built-with)
* [Authors](#authors)

### Description

This is my approach to create bitcoin cold wallet like the [mew](https://www.myetherwallet.com/).

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
2. Sign any message
3. Sign tx based on input file
4. download keyfile like mew