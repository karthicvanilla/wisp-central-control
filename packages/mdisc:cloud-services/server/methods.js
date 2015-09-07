Meteor.methods({
  addCredential: function(service, credentialToken, credentialSecret) {
    var credentialDetail = OAuth.retrieveCredential(credentialToken, credentialSecret);
    var credential = MdCloudServices.credentials.findOne({owner: this.userId, service: service});
    if (credential) {
      MdCloudServices.credentials.update({_id: credential._id}, {$set: {service: service, credentialToken: credentialToken, credentialSecret: credentialSecret, credential: credentialDetail}});
    } else {
      MdCloudServices.credentials.insert({service: service, credentialToken: credentialToken, credentialSecret: credentialSecret, credential: credentialDetail});
    }
  },
  getTopPhotos: function(service) {
    var data = {};
    switch (service) {
      case 'Google Photos':
        var credential = MdCloudServices.credentials.findOne({owner: this.userId, service: service});
        if (credential) {
          var accessToken = credential.credential.serviceData.accessToken;
          if (accessToken) {
            //gPhotos.refreshAccessToken(accessToken);
            gPhotos.setAccessToken(accessToken);
            gPhotos.getRecent(function(err, res) {
              var len = res.feed.entry.length;
              for (var x = 0; x < len; x++) {
                console.log(res.feed.entry[x].content.src);
              }
            });
          }
        }
        break;
    }
    return data;
  }
});