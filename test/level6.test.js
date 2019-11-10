
const persistence = require('../level6/persistence');
describe("Basic tests", function(){
  it("Test 1", function(){
    assert.equal(persistence(39),3);
  } )
  it("Test 2", function(){
    assert.equal(persistence(4),0);
  } )
  it("Test 3", function(){
    assert.equal(persistence(25),2);
  } )
  it("Test 4", function(){
    assert.equal(persistence(999),4);
  } )
});
