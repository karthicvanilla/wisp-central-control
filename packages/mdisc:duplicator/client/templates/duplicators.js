Template.mdDuplicators.helpers({
  duplicatorList: function () {
    return MdDuplicator.find({deleted: {$ne: true}}).fetch();
  },
  selected: function (a, b) {
    return a == b ? 'selected' : '';
  }
});

Template.mdDuplicatorsEdit.helpers({
  selected: function (a, b) {
    return a == b ? 'selected' : '';
  }
});


Template.mdDuplicators.events({
  "submit .duplicator-add": function (event) {
    event.preventDefault();
    event.stopPropagation();

    var data = {
      name:           event.target.name.value,
      compatibility:  event.target.compatibility.value,
      ip:             event.target.ip.value,
      ftpUser:        event.target.ftpUser.value,
      ftpPass:        event.target.ftpPass.value
    }

    MdDuplicator.insert(data);

    event.target.name.value = "";
    event.target.ip.value = "";
    event.target.ftpUser.value = "";
    event.target.ftpPass.value = "";
  }
});


Template.mdDuplicatorsEdit.events({
  "submit .duplicator-save": function (event) {
    event.preventDefault();
    event.stopPropagation();

    var _id = this._id

    var data = {
      name:           event.target.name.value,
      compatibility:  event.target.compatibility.value,
      ip:             event.target.ip.value,
      ftpUser:        event.target.ftpUser.value,
      ftpPass:        event.target.ftpPass.value
    }

    var name = event.target.name.value;

    MdDuplicator.update(_id, {$set: data}, {}, function (err, res) {
      if (err)
        WtGrowl.fail("Could not update duplicator " + name);
      else
        WtGrowl.success("Duplicator " + name + " updated");
    });

  }
});
