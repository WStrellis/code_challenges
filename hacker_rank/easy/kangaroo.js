function kangaroo(x1, v1, x2, v2) {
  let met = "NO";
  function willMeet(x1, v1, x2, v2) {
      if (x1 <= 10000 && x2 <= 10000) {
          if (x1 === x2) {
              // base case
              met = "YES";
          }
          else {
              // recursive case
              // add the movement speed to previous start position
              willMeet(x1 + v1, v1, x2 + v2, v2);
          }
       }
      } //end willMeet
   willMeet( x1,v1,x2,v2);
   return met;
}

// console.log(kangaroo(0,3,4,2));
// console.log(kangaroo(0,2,5,3));
// kangaroo(4602 , 8519 , 7585 , 8362 )

module.exports = { kangaroo };
