module.exports = function(req, res, next) {
  var id = req.param('id');

  Sessions.findOne({id: id}).then(function(resource) {
    if(resource == undefined) {
      throw "Resource not found";
    }
    req.resource = resource;
    next();
  }).catch(function(e) {
    res.appError(e);
  });
};
