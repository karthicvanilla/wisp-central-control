MdFtp = {};

if (Meteor.isServer) {

  var Client = Npm.require('ftp');

  MdFtp.put = function(server, src, dst, cb) {
    var c = new Client();
    c.on('ready', function() {
      c.put(src, dst, function(err) {
        c.end();
        cb(err);
      });
    });
    c.connect(server);
  }
  
}
