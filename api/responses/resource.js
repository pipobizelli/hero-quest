module.exports = function resource(data) {
  var req = this.req;
  var res = this.res;

  res.status(200);
  res.json({
    resource: data
  })
}
