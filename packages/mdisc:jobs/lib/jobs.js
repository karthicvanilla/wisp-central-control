
MdJobs = JobCollection('md_jobs');

if (Meteor.isServer) {
  MdJobs.allow({
    // Grant full permission to any authenticated user
    // ToDo: only allow admin role users this access level.
    admin: function (userId, method, params) {
      return (userId ? true : false);
    }
  });

  Meteor.startup(function () {
    // Normal Meteor publish call, the server always
    // controls what each client can see
    Meteor.publish('allJobs', function () {
      return MdJobs.find({});
    });

    // Start the queue running
    return MdJobs.startJobServer();
  });

  Meteor.methods({
    addDownloadArchiveJob: function (archiveId) {
      var job = new Job(MdJobs, 'downloadArchive', 
        {
          userId: this.userId,
          archiveId: archiveId
        }
      );
      job.priority('normal').save();
    }
  });
}

if (Meteor.isClient) {

  Meteor.startup(function () {
    Meteor.subscribe('allJobs');
  });
}