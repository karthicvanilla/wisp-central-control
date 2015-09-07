Package.describe({
  name: 'mdisc:cloud-service-google-photo',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'meteor',
    'oauth',
    'templating',
    'google',
    'meteorhacks:async'
  ]);  

  // Server only files
  api.addFiles([
    'server/g-photos.js'
    ], 'server');

  // Client only files
  api.addFiles([
    'client/templates/authorize.html',
    'client/templates/authorize.js',
    'client/templates/show-few-photos.html',
    'client/templates/show-few-photos.js'
    ], 'client');
  
  api.export('gPhotos', 'server');  
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mdisc:cloud-service-google-photo');
  api.addFiles('cloud-service-google-photo-tests.js');
});

Npm.depends({
  "simple-gdata": "0.1.0",
  "google-refresh-token": "0.5.3"
});