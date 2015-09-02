Meteor.methods({
  addCredential: function(service, credentialToken, credentialSecret) {
    var credential = OAuth.retrieveCredential(credentialToken, credentialSecret);
    MdCloudServices.credentials.insert({service: service, credentialToken: credentialToken, credentialSecret: credentialSecret, credential: credential});
  }
});