var assert = require('assert');

suite('Names', function(){
  test('must have a hundred names', function(done, server){
    server.eval(function(){
      Names.remove({});
      Names.seed();
      emit('loaded', Names.find().fetch());
    }).once('loaded', function(names){
      assert.equal(names.length, 100);
      done();
    });
  });
});
