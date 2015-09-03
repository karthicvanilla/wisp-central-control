var meldDBCallback = function(src_user_id, dst_user_id) {
//    Archives.update({owner: src_user_id}, {$set: {owner: dst_user_id}}, {multi: true});
};

AccountsMeld.configure({
  askBeforeMeld: false,
  checkForConflictingServices: true,
  meldDBCallback: meldDBCallback
});