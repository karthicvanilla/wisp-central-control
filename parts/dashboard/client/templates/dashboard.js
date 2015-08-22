Template.dashboard.helpers({
  jobOpen: function () {
    return MdArchive.find({status: "open"}).count();
  },
  jobDownloading: function () {
    return MdArchive.find({status: "download"}).count();
  },
  jobReady: function () {
    return MdArchive.find({status: "duplicate"}).count();
  },
  jobComplete: function () {
    return MdArchive.find({status: "shipped"}).count();
  },
  jobTotal: function () {
    return MdArchive.find().count();
  }
});