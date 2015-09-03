// Set up login services
Meteor.startup(function() {
  ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
      $set: {
        clientId: Meteor.settings.google.clientId,
        loginStyle: "popup",
        secret: Meteor.settings.google.secret
      }
    }
  );
});