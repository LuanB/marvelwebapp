'use strict';
//used to import service module
var util = require('./service');

module.exports = function(app, express) {
  var api = express.Router();

  /**
   * @name comics
   * @description
   *  end point to get comics
   */

  api.get('/comics', function(req, res) {
    var result = util.getComics(function(err, response, data) {
      if (!err) {
        res.send(data);
      }
    });
  });

  api.get('/comicdetails/:id', function(req, res) {
    var result = util.getComicDetails(req.params.id, function(
      err,
      response,
      data
    ) {
      if (!err) {
        res.send(data);
      }
    });
  });

  return api;
};
