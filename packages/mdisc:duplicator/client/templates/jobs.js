Template.mdJobs.onRendered(function () {
  if (Session.get("selectedDuplicator") == null) {
    var duplicator = MdDuplicator.findOne({deleted: {$ne: true}});
    Session.set({selectedDuplicator: duplicator._id});
  }
  if (Session.get("jobTypeFilter") == null) {
    Session.set({jobTypeFilter: "DVD (2.4GB) and Blu-ray (25GB)"});
  }
});

Template.mdJobs.helpers({
  duplicatorList: function () {
    return MdDuplicator.find({deleted: {$ne: true}}).fetch();
  },
  selectedDup: function (i) {
    var id = Session.get("selectedDuplicator");
    return i == id ? 'selected' : '';
  },
  selectedType: function (t) {
    var type = Session.get("jobTypeFilter");
    return t == type ? 'selected' : '';
  },
  typeDisable: function () {
    var id = Session.get("selectedDuplicator");
    var duplicator = MdDuplicator.findOne({_id: id});
    if (duplicator != null) {
      return duplicator.compatibility == "DVD (2.4GB) and Blu-ray (25GB)" ? '' : 'disabled';
    }
  }
});

Template.mdJobs.events({
  "change #dup-filter": function (event) {
    var id = event.target.value;
    Session.set({selectedDuplicator: id});
    var duplicator = MdDuplicator.findOne({_id: id});
    if (duplicator != null) {
      Session.set({jobTypeFilter: duplicator.compatibility});
    }
  },
  "change #job-filter": function (event) {
    var id = event.target.value;
    Session.set({jobTypeFilter: id});
  }
});

Template.mdJobsToDo.helpers({
  jobToDoList: function () {
    var filter = Session.get("jobTypeFilter");
    var search = {status: "Ready to Duplicate"};
    if (filter == "DVD (2.4GB)") search.diskType = "DVD";
    if (filter == "Blu-ray (25GB)") search.diskType = "Blu-ray";
    return MdArchive.find(search).fetch();
  }
});

Template.mdJobsToStart.helpers({
  jobToDoList: function () {
    var id = Session.get("selectedDuplicator");
    return MdArchive.find({status: "Ready to Start", duplicatorId: id}).fetch();
  }
});

Template.mdSendJob.events({
  "click .md-send": function (event) {
    var id = this.id;
    var dupId = Session.get("selectedDuplicator");
    var data = {status: "Ready to Start", duplicatorId: dupId};

    MdArchive.update({_id: id}, {$set: data});
  }
});

Template.mdRemoveJob.events({
  "click .md-remove": function (event) {
    var id = this.id;
    var data = {status: "Ready to Duplicate"};

    MdArchive.update({_id: id}, {$set: data});
  }
});
