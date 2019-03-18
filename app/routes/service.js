'use strict';

//module used to make http request
var request = require('request');
var md5 = require('md5');
//md5(ts+privateKey+publicKey)

//configuration object
var config = require('./../../config');

/**
 * @name getComics
 * @description
 *  service function to get Comics
 * @param
 * @param cb a callback function
 */
var getComics = function getComics(cb) {
  //var dateString = date.concat('.json');
  //ts = date.concat('.json');
  var ts = 1;
  var apiKey = config.publicApiKey;
  var hash = md5(ts + config.privateApiKey + apiKey);
  var url = config.basepath
    .concat('comics')
    .concat('?ts=')
    .concat(ts)
    .concat('&apikey=')
    .concat(apiKey)
    .concat('&hash=')
    .concat(hash);
  request(url, function(error, response, body) {
    cb(error, response, body); //callback function
  });
};

/**
 * @name getComicDetails
 * @description
 *  service function to get Comics details
 * @param
 * @param cb a callback function
 */
var getComicDetails = function getComicDetails(id, cb) {
  //var dateString = date.concat('.json');
  //ts = date.concat('.json');
  var ts = 1;
  var apiKey = config.publicApiKey;
  var hash = md5(ts + config.privateApiKey + apiKey);
  var url = config.basepath
    .concat('comics/')
    .concat(id)
    .concat('?ts=')
    .concat(ts)
    .concat('&apikey=')
    .concat(apiKey)
    .concat('&hash=')
    .concat(hash);
  request(url, function(error, response, body) {
    cb(error, response, body); //callback function
  });
};

/**
 * @name getHistorical
 * @description
 *  service function to get historical data
 * @param date format(yyyy-mm--dd)
 * @param cb a callback function
 */
var getHistorical = function getHistorical(date, cb) {
  var dateString = date.concat('.json');
  var url = config.basepath
    .concat('historical/')
    .concat(dateString)
    .concat('?app_id=')
    .concat(config.apikey);
  request(url, function(error, response, body) {
    cb(error, response, body); //callback function
  });
};
/**
 * @name getCurrencies
 * @description
 *  service function to get list of currencies data
 * @param cb a callback function
 */

var getCurrencies = function getCurrencies(cb) {
  var url = config.basepath
    .concat('/')
    .concat('currencies.json')
    .concat('?app_id=')
    .concat(config.apikey);
  request(url, function(error, response, body) {
    cb(error, response, body); // callback function
  });
};
/**
 * @name getLatest
 * @description
 *  service function to get latest exchange rate wiith base currency set as USD
 * @param cb a callback function
 */
var getLatest = function getLatest(cb) {
  var url = config.basepath
    .concat('/')
    .concat('latest.json')
    .concat('?app_id=')
    .concat(config.apikey);
  request(url, function(error, response, body) {
    cb(error, response, body); // callback function
  });
};

/**
 * @description
 * Service object to expose required functions
 */

var serviceObject = {
  getComics: getComics,
  getComicDetails: getComicDetails
};

/**
 * @description
 * used to expose the methods
 */
module.exports = serviceObject;
