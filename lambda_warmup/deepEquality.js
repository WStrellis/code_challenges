/*
Write a function that, given two objects, returns whether or not the two are deeply equivalent - meaning the contents of the two objects are equal for all keys and sub-keys.
*/

function deepEquals(obj1, obj2) {
  let o1vals = Object.values(obj1);
  let o2vals = Object.values(obj2);

  if (o1vals.length !== o2vals.length) return false;

  let areEqual = false;
  o1vals.forEach((ele, ind) => {
    if (typeof ele === "string") {
      areEqual = ele === o2vals[ind];
    } else if (typeof ele === "object") {
      deepEquals(ele, o2vals[ind]);
    }
  }); //end forEach
  return areEqual;
}

const johnA = {
  name: "John",
  address: {
    line1: "321 Anytown",
    line2: "Stoke-on-Trent"
  }
};

const johnB = {
  name: "John",
  address: {
    line1: "321 Anytown",
    line2: "Stoke-on-Trent"
  }
};

const johnC = {
  name: "John Charles",
  address: {
    line1: "321 Anytown",
    line2: "Stoke-on-Trent"
  }
};

console.log(deepEquals(johnA, johnB)); // true
console.log(deepEquals(johnA, johnC)); // false
