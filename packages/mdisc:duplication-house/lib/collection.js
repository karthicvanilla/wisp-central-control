MdDuplicationHouse = WtCollection('md_duplication_house');

// Init mongo
if (Meteor.isServer) {
  if (MdDuplicationHouse.find().count() == 0) {
    var data = {
      name: 'Test',
      location: 'Pleasant Grove, UT'
    }
    MdDuplicationHouse.insert(data);
  }
}