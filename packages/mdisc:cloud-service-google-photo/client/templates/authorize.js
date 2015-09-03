Template.mdCloudGoogleAuthorizeButtonsBig.events({
    'click a#authorizeGooglePhoto': function(e, t) {
        e.preventDefault();

        Google.requestCredential({
            requestPermissions: ['https://picasaweb.google.com/data/'],
            requestOfflineToken: 'false'
        }, function (credentialToken) {
            var credentialSecret = OAuth._retrieveCredentialSecret(credentialToken);
            if (credentialToken && credentialSecret)
              Meteor.call("addCredential", 'Google Photos', credentialToken, credentialSecret);
        });
    }
});