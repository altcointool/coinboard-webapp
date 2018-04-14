/**
 * @file {@link config} module for listening address and more
 * @author Trevis Gulby
 */

/**
 * An AppConfig class trying to unify alls
 * methods and var used by pages
 * @class
 */
class AppConfig {
    /** @constructor */
    constructor() {
        /** os dep to get network interface */
        this.os = require('os');
        /** network interface import */
        this.ni = this.os.networkInterfaces();
        /** fs module import */
        this.fs = require('fs');
        /** what ip should i get ?
         * @TODO : Add new methods to better select listening interface
         */
        this.myip = this.ni.wlan0[0].address;
        this.runningaddrs = {
            /** final app view url for reference in template */
            appvurl: process.env.SERV_ENV == 'onion' ?
                this.gettorhostname.view() : 'http://' + this.myip + ':3000/',
            /** final app socket url for reference in template */
            appsurl: process.env.SERV_ENV == 'onion' ?
                this.gettorhostname.socks() : 'http://' + this.myip + ':3001/',
        };
    }
}

/** check tor hostname if onion service set */
AppConfig.prototype.gettorhostname = {
    view: function() {
        let buff = new Buffer(22);
        let fn = '/var/lib/tor/hidnview/hostname';
        buff = this.fs.readFileSync(fn, 'ascii');
        let ret = 'http://' + buff.toString().replace(/\s+/g, ' ').trim();
        ret += '/';
        return ret;
    },
    socks: function() {
        let buff = new Buffer(22);
        let fn = '/var/lib/tor/hidnws/hostname';
        buff = fs.readFileSync(fn, 'ascii');
        let ret = 'http://' + buff.toString().replace(/\s+/g, ' ').trim();
        return ret += ':124/';
    },
};

/** Http header sec settings */
AppConfig.prototype.httpopts = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'etag': 'false',
};
/** Favicon static param */
AppConfig.prototype.favopts = {
    dotfiles: 'ignore',
    etag: false,
    extensions: [
        'htm', 'html',
    ],
    index: false,
    maxAge: '1d',
    redirect: false,
};

module.exports = AppConfig;
/** App config module containing  listening addresses, hostnames and much more
 * @module config
 */