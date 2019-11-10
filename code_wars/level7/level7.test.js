
const maxMultiple = require('./maximum_multiple');
describe("Basic its", function(){
  it("Test 1", function(){
    assert.equal(maxMultiple(2,7), 6 );
  } )
  it("Test 2", function(){
    assert.equal(maxMultiple(3,10), 9 );
  } )
  it("Test 3", function(){
    assert.equal(maxMultiple(7,17), 14 );
  } )
  it("Test 4", function(){
    assert.equal(maxMultiple(10,50), 50 );
  } )
});

const nbYear = require('./growthOfAPopulation');
describe.only("Growth of a Population", function(){
  it('Test 1', function(){
    assert.equal(nbYear(1500, 5, 100, 5000), 15)
  })

  it('Test 2', function(){
    assert.equal(nbYear(1500000, 2.5, 10000, 2000000), 10);
  })

  it('Test 3', function(){
    assert.equal(nbYear(1500000, 0.25, 1000, 2000000), 94);
  })
})
