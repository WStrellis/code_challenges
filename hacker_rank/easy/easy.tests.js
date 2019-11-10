const expect = require("chai").expect;


describe('Tests for kangaroo.js', function(){
  const kangaroo = require("./kangaroo").kangaroo;

  it('Test 1: 0,3,4,2', function(){
    let result = kangaroo(0,3,4,2);
    expect( result ).to.equal( "YES" );
  }); 

  it('Test 2: 0,2,5,3', function(){
    let result = kangaroo(0,2,5,3);
    expect( result ).to.equal( "NO" );
  }); 

  it('Test 3: 35,1,45,3', function(){
    let result = kangaroo(35,1,45,3);
    expect( result ).to.equal( "NO" );
  }); 


  it('Test 4: 4602 , 8519 , 7585 , 8362', function(){
    let result = kangaroo(4602 , 8519 , 7585 , 8362 );
    expect( result ).to.equal( "YES" );
  });
});
