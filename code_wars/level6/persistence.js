
/*
function persistence(num) {
  //make a string
  //split into array
  let numArray = num.toString().split('');
  // multiply numbers
  let newNum = numArray.reduce( (acc, curr ) => acc * curr);
  // repeat until length of array is 1 then return that number
  return ( newNum.toString().split('').length > 1) ?
    persistence( newNum ): newNum;
}
*/
/*
function persistence( num ){
  // convert number to string then split into array
  let current = String(num).split('');
  // count number of times multiplied
  let timesMultiplied = 0;
  while( current.length > 1 ){
    // multiply numbers
    let newNum = current.reduce( (acc, curr ) => acc * curr, 1);
    // set new current number
    current = String(newNum).split('');
    // increment timeMultiplied
    timesMultiplied += 1;
  }
  // when num is a single digit return timesMultiplied
  return timesMultiplied;
}
*/

//improved version
function persistence( num ){
  // convert number to string 
  num = String(num);
  // count number of times multiplied
  let timesMultiplied = 0;
  while( num.length > 1 ){
    num = String([...num].reduce( (acc, curr ) => acc * +curr, 1));
    // increment timeMultiplied
    timesMultiplied += 1;
  }
  // when num is a single digit return timesMultiplied
  return timesMultiplied;
}

module.exports = persistence;
