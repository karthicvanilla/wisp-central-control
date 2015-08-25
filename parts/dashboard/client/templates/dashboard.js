Template.dashboard.helpers({
  jobOpen: function () {
    return MdArchive.find({status: "Open"}).count();
  },
  jobDownloading: function () {
    return MdArchive.find({status: "Downloading"}).count();
  },
  jobReady: function () {
    return MdArchive.find({status: "Ready to Duplicate"}).count();
  },
  jobComplete: function () {
    return MdArchive.find({status: "Shipped"}).count();
  },
  jobTotal: function () {
    return MdArchive.find().count();
  }
});