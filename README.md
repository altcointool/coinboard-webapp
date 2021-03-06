    ........._____......._...............______....................._.
    ......./ ..__.\.....(_)..............|.___.\...................|.|
    .......| ./..\/.___.._._.__..........|.|_/./.___...__._._.__.__|.|
    .......| .|..../._.\|.|.'_.\.........|.___.\/._.\./._`.|.'__/._`.|
    .......| .\__/\.(_).|.|.|.|.|........|.|_/./.(_).|.(_|.|.|.|.(_|.|
    ........\ ____/\___/|_|_|.|_|........\____/.\___/.\__,_|_|..\__,_|
    ..........................______.______...........................
    .........................|______|______|..........................
               ******* Coin_Board|<Readme.md>
    _____________________________________

[![NSP Status](https://nodesecurity.io/orgs/myassetboard/projects/04879839-3267-4c02-be03-e8327234c183/badge)](https://nodesecurity.io/orgs/myassetboard/projects/04879839-3267-4c02-be03-e8327234c183) [![codecov](https://codecov.io/gh/MyAssetBoard/coinboard-webapp/branch/master/graph/badge.svg)](https://codecov.io/gh/MyAssetBoard/coinboard-webapp) [![Maintainability](https://api.codeclimate.com/v1/badges/9ac9afa71800cd011a6e/maintainability)](https://codeclimate.com/github/MyAssetBoard/coinboard-webapp/maintainability) [![Build Status](https://travis-ci.org/MyAssetBoard/coinboard-webapp.svg?branch=master)](https://travis-ci.org/MyAssetBoard/coinboard-webapp) [![Greenkeeper badge](https://badges.greenkeeper.io/MyAssetBoard/coinboard-webapp.svg)](https://greenkeeper.io/)

## Features (Wip, already dev or future improvements) :

> -   **Add, track, buy and sell** all kind of assets (fiat, crypto, options..) **from one platform**
>
>
> -   **Train your application** to automate your cash flows (AI modules )
>
>
> -   **Tor** [hidden service](https://www.torproject.org/) docker deployment for easy access everywhere, improved security and reliability
>
>
> -   **MongoDB dbms** with [Mongoose](http://mongoosejs.com/docs/api.html) version 5.1 finely cooked db models
>
>
> -   A gorgeous and up to date [**documentation**](https://myassetboard.github.io/coinboard-webapp/index.html) gracefully hosted by @github
>
>
> -   A **lot** more to come ...

## App directory structure :

All information's about how this app is organized /coded

### coin_board/

> All application JavaScript source files

-   **coin_board/bin** : Contains the main services:  **webview** with [Express](expressjs.com) & [Ejs](http://ejs.co/), **websocket** with [Ws](https://github.com/websockets/ws) module

-   **coin_board/bot/**: Dedicated to the CoinBoardBot [Telegram](https://telegram.org/) bot functionalities

-   **coin_board/controllers/**: Various JavaScript modules / classes for crud, crypto, user management etc

-   **coin_board/params/**: [Ejs](http://ejs.co/) template rendering parameter for each route page

-   **coin_board/public/**: The static assets directory including client side JavaScript files

-   **coin_board/routes/**: Express Router overloads sub-modules

-   **coin_board/Schemas/**: The hot [Mongoose](http://mongoosejs.com/docs/api.html) db schemas and models

-   **coin_board/views/**: All the Eye-Candy, pinky, piggy, fancy stuff for app view (EJS style)\*

\* Note : Replacement in progress with new Angular components in AngularCoinBoard/ directory

### conf/

> As its name suggest, lots of configuration  files like [PM2](http://pm2.keymetrics.io/) application runfile config, [JSDoc](http://usejsdoc.org/index.html) conf file and doc template or [Nginx](https://www.nginx.com/), mongoDB conf and torrc files for [Docker](https://www.docker.com) deployment.

-   **conf/jsdoctemplate/** Jsdoc coin_board documentation custom template

-   **conf/onion/**: Hidden service Docker deployment conf files

### test/

> All [Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/) unit testing files.

-   **test/fixtures/**: All fixtures

-   **test/methods/**: Tests for methods functions

-   **test/page_mockup/**: For rendering tests

-   **test/routes/**: Tests for router overloads functions

-   **test/schemas/**: Tests for mongoose schemes

## Hot news :

-   Great news !!! This->app is now deployed as 'staging' test version on Heroku servers !!

-   Please find a live example of this app @ [coin-board.herokuapp.com](https://coin-board.herokuapp.com/)  :)
