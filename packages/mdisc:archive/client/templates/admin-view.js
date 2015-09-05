
Template.mdArchiveAll.helpers({
  archives: function () {
    return MdArchive.find().fetch();
  }
});
