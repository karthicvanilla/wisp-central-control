Package.describe({
  name: 'mdisc:duplicator',
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
    'iron:router@1.0.7',
    'mdisc:archive',
    'mdisc:duplication-house',
    'wisptools:collection',
    'wisptools:menu',
    'wisptools:growl',
    'wisptools:delete-btn'
  ]);

  api.addFiles([
    'lib/collection.js',
    'lib/router.js'
    ], ['server','client']);

  // Client only files
  api.addFiles([
    'client/menu.js',
    'client/templates/duplicators.html',
    'client/templates/duplicators.js'
    ], 'client');

  api.export('MdDuplicator');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mdisc:duplicator');
  api.addFiles('duplicator-tests.js');
});
