Meteor.publish('transacations', function() {
  return Transacations.find();
})