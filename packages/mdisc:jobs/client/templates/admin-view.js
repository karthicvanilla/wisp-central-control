
Template.mdJobsWorkingAll.helpers({
  jobs: function () {
    return MdJobs.find({status: {$ne:'completed'}}).fetch();
  }
});
