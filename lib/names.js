Names = new Meteor.Collection('names');

Names.seed = function seed(){
  var names = [];
  for(var i = 0; i<100; i+=1){
    names[names.length]= (Math.random() *  130500)
    .toString(32)
    .split(/\./)
    .join('');
  }
  names.map(function(i, n){
    return {
      id: n,
      value: i
    };
  }).forEach(function(doc){
    Names.insert(doc);
  });
};
