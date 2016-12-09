module.exports = function appError(message) {
  var req = this.req;
  var res = this.res;

  res.status(500);
  res.json({
    "error": message
  });
}
