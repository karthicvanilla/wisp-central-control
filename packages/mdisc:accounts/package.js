Package.describe({
  name: 'mdisc:accounts',
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
    'mongo',
    'templating',
    'accounts-base@1.2.0',
    'accounts-password@1.1.1',
    'useraccounts:iron-routing@1.12.3',
    'softwarerero:accounts-t9n@1.1.4',
  ]);  

  api.addFiles([
    'lib/config/accounts_t9n.js',
    'lib/config/at_config.js'
    ], ['server','client']);

  //api.export('Accounts');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mdisc:accounts');
  api.addFiles('accounts-tests.js');
});
