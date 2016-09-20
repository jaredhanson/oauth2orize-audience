module.exports = function() {
  
  function request(req) {
    var q = req.query
      , ext = {};
    
    if (q.audience) {
      ext.audience = q.audience;
    }
    
    return ext;
  }
  
  var mod = {};
  mod.name = '*';
  mod.request = request;
  return mod;
}
