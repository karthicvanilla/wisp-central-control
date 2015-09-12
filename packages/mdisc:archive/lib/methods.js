Meteor.methods({
  openAutoCloudArchive: function (service) {
    var id = MdArchive.insert({
      type: 'Auto Cloud Archive',
      service: service,
      status: 'Open',
      initDone: false 
    });
    return id;
  }  
});