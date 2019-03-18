/**
 * @description
 * configuraton for the exchange api end point
 *
 */
module.exports = {
  basepath: 'http://gateway.marvel.com/v1/public/',
  publicApiKey: 'b035f8d6e4ca61147cec518ebfdf1485',
  privateApiKey: '94f049a81d6a800c5689062329a89ef2ba7152e3',
  port: process.env.PORT || 5000
};
