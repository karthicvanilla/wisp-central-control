
Template.mdJobsWorkingAll.helpers({
  jobs: function () {
    return MdJobs.find().fetch();
  }
});
