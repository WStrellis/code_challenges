// https://www.codewars.com/kata/training-js-number-24-methods-of-arrayobject-splice-and-slice

/*
better way

function threeInOne(arr){
  var result = [];
  for(var i=0;i<arr.length;i+=3) {
    result.push(arr[i] + arr[i+1] + arr[i+2]);
  }
  return result
}

*/

// my solution
function threeInOne(a){
    let n = [];
    let c = a.slice();
    for( let i = 0; i < a.length/3 ; i++){
        n.push( c.splice(0,3).reduce((acc,curr) => acc + curr))
    }
    return n;
}


function recursive(a,n){
     n.push(a.splice(0,3).reduce((acc,curr) => acc + curr))
    return (a.length > 0) ?  recursive(a,n) : n;
}

let test1 = [1,2,3,4,5,6]

console.log(threeInOne(test1));

test1 = [1,2,3,4,5,6]
console.log(recursive(test1.slice(), []));
console.log(test1);
