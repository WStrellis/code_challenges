'use strict';

// const mocha = require('/usr/lib/node_modules/mocha');
const describe = require('/usr/lib/node_modules/mocha').describe;
const it = require('/usr/lib/node_modules/mocha').it;

const assert = require('/usr/lib/node_modules/chai').assert;

const two_sum =  require('./two_sum').two_sum;
describe.skip('Tests for two_sum', function () {

  it('Test for [1,2,3]', function () {
  assert.sameMembers(two_sum([1,2,3], 4) , [0,2]);
  });

  it('Test for [2,2,3]', function () {
  assert.sameMembers(two_sum([2,2,3], 4) , [0,1]);
  });

  it('Test for [1234, 5678, 9012]', function () {
  assert.sameMembers(two_sum([1234, 5678, 9012], 14690) , [1,2]);
  });
});

const spinWords =  require('./spin_words').spinWords;
describe('Tests for spinWords', function () {
 it('Test 1', function () {
   assert.equal(spinWords( "Hey fellow warriors" ), "Hey wollef sroirraw")
 }); 

 it('Test 2', function () {
   assert.equal(spinWords( "This is a test" ), "This is a test")
 }); 

 it('Test 3', function () {
   assert.equal(spinWords( "This is another test" ), "This is rehtona test")
 }); 

 it('Test 4', function () {
   assert.equal(spinWords( "Just kidding there is still one more" ), "Just gniddik ereht is llits one more")
 }); 
});
