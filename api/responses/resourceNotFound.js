module.exports = function resourceNotFound (data, options) {
  var req = this.req;
  var res = this.res;

  res.status(404);
  res.json({
    "error": "Resource not found."
  });
}
