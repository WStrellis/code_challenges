

// const assert = require('chai').assert;
// const expect = require('chai').expect;
// const should = require('/usr/lib/node_modules/chai').should();


/* const betterThanAverage = require('./level8/betterThanAverage.js').betterThanAverage;
describe('tests for lvl8:betterThanAverage', function () {
  it('Test 1', function () {
    assert.equal(betterThanAverage([2,3],5), true);
  });
  it('Test 2', function () {
    assert.equal(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true );
  });
  it('Test 3', function () {
    assert.equal(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
  });
  
}); */

/* 
const meeting = require('./level6/meeting.js').meeting;
describe('tests for lvl8:betterThanAverage', function () {
  it('Test 1', function () {
  assert.equal(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"),
  "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");
  });

  it('Test 2', function () {
   assert.equal(meeting("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell"), 
            "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)");
  });

  it('Test 3', function () {
    assert.equal(meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"), "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)");
  });

});
 */

 /*
 const validateCC = require('./level6/validate_cc.js').validate;
 describe('Tests for Lvl6 Validate Credit Card Number', function () {
   it('Test 1', function () {
    assert.equal(validateCC(123), false); 
   });

   it('Test 2', function () {
    assert.equal(validateCC(1), false); 
   });

   it('Test 3', function () {
    assert.equal(validateCC(2121), true); 
   });

   it('Test 4', function () {
    assert.equal(validateCC(1230), true); 
   });
   
 }); // end tests for validate_cc.js
*/

/*
const scramble = require('./level5/scramblies.js').scramble;
describe('Tests for Lvl5 Scramblies', function () {
 
  it('Test 1', function () {
    assert.equal(scramble('rkqodlw','world'),true);
  });

  it('Test 2', function () {
    assert.equal(scramble('cedewaraaossoqqyt','codewars'),true);
  });
  it('Test 3', function () {
    assert.equal(scramble('katas','steak'),false);
  });
  it('Test 4', function () {
    assert.equal(scramble('scriptjava','javascript'),true);
  });
  it('Test 5', function () {
    assert.equal(scramble('scriptingjava','javascript'),true);
  });
  it('Test 6', function () {
    assert.equal(scramble('scriptsjava','javascripts'),true);
  });
  it('Test 7', function () {
    assert.equal(scramble('jscripts','javascript'),false);
  });
  it('Test 8', function () {
    assert.equal(scramble('aabbcamaomsccdd','commas'),true);
  });

});// end tests for scramblies
*/
/*
const posAverage = require('./level6/positions_average.js').posAverage;
describe('Tests for Positions Average', function () {
  it('Test 1', function () {
    assert.equal( posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"), 26.6666666667);
  });
  it('Test 2', function () {
    assert.equal( posAverage("444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490"), 29.2592592593);
  });
});
*/

/*
const isTwinPrime = require('./lambda_warmup/twinPrimes.js').isTwinPrime;
describe('Tests for isTwinPrime', function () {
  it('Test 1', function () {
    assert.equal( isTwinPrime(5), true, `Expected 5 to return true`);
  });

  it('Test 2', function () {
    assert.equal( isTwinPrime(9), false, `Expected 9 to return false`);
  });

  it('Test 3', function () {
    assert.equal( isTwinPrime(7), true, `Expected 7 to return true`);
  });

  it('Test 4', function () {
    assert.equal( isTwinPrime(23), false,`Expected 23 to return false`);
  });

  it('Test 5', function () {
    assert.equal( isTwinPrime(2), false,`Expected 2 to return false`);
  });

  it('Test 6', function () {
    assert.equal( isTwinPrime(0), false,`Expected 0 to return false`);
  });

});
*/

/*
const quickSort = require('./lambda_warmup/quicksort.js').quickSort;
describe('Tests for quickSort', function () {
  it('Test 1', function () {400
    let qsResult = quickSort( [5,4,545,23,65,49,7,877,675,400] );
    let asResult =  [5,4,545,23,65,49,7,877,675,400].sort( ( a, b) => a - b);
    assert.sameOrderedMembers( qsResult, asResult , `Expected ${ qsResult } to equal ${ asResult }`);
  });

  it('Test 2', function () {
    let qsResult = quickSort( [1043, 4342,489,32,4555,230,343,998, 495, 1224] );
    let asResult =  [1043, 4342,489,32,4555,230,343,998, 495, 1224].sort( ( a, b) => a - b);
    assert.sameOrderedMembers( qsResult, asResult , `Expected ${ qsResult } to equal ${ asResult }`);
  });

});
*/

/*
const  uniqueInOrder  = require('../level6/uniqueInOrder.js');
describe('Tests for uniqueInOrder', function () {
  it('Test 1', function () {400
    let actual = uniqueInOrder('AAAABBBCCDAABBB');
    let expected = ['A', 'B', 'C', 'D', 'A', 'B'];
    assert.sameOrderedMembers( actual, expected , `Expected ${ actual } to equal ${ expected }`);
  });

  it('Test 2', function () {
    let actual = uniqueInOrder('ABBCcAD');
    let expected = ['A', 'B', 'C', 'c', 'A', 'D'];
    assert.sameOrderedMembers( actual, expected , `Expected ${ actual } to equal ${ expected }`);
  });


  it('Test 3', function () {
    let actual = uniqueInOrder([1,2,2,3,3]);
    let expected = [1,2,3];
    assert.sameOrderedMembers( actual, expected , `Expected ${ actual } to equal ${ expected }`);
  });

  it('Test 4', function () {
    let actual = uniqueInOrder([1,2,2,3,3]);
    let expected = [1,2,5];
    expect( actual ).to.have.ordered.members( expected );
  });
})
*/

/*
const  moveZeroes  = require('../level6/monday_challenge.js');

describe('Tests for uniqueInOrder', function () {

  it('Test 1', function () {
    let actual = moveZeroes(["a",0,"b",0,0,0,0,null,0,0,0,"c","d",1,0,false,1,0,3,[],1,9,{},9]);
    let expected =  ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0];
    assert.sameOrderedMembers( actual, expected , `Expected ${ actual } to equal ${ expected }`);
  });

  it('Test 2', function () {
    let actual = moveZeroes([1,2,0,1,1,2]);
    let expected =  [1,2,1,1,2,0];
    assert.sameOrderedMembers( actual, expected , `Expected ${ actual } to equal ${ expected }`);
  })

})
*/
