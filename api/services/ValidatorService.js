module.exports = {
  checkResource : function(resource) {
    if(resource == undefined) {
      throw "Resource not found.";
    } else {
      return resource;
    }
  }
}
