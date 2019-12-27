/* 
Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9, write a method to rotate the image by 90 degrees counterclockwise. Can you do this in place?
Ex:

rotateImage([ [1, 2],
              [3, 4]]);
should return

[ [2, 4],
  [1, 3]].

Likewise, 
rotateImage([
  [1, 1, 5, 9, 9],
  [2, 2, 6, 0, 0],
  [3, 3, 7, 1, 1],
  [4, 4, 8, 2, 2],
  [5, 5, 9, 3, 3]
  ]);
should return

[ [ 9, 0, 1, 2, 3 ],
  [ 9, 0, 1, 2, 3 ],
  [ 5, 6, 7, 8, 9 ],
  [ 1, 2, 3, 4, 5 ],
  [ 1, 2, 3, 4, 5 ] ] 
  */

function rotateImage(arr) {
  // make array of empty arrays
  let newArr = Array.from(Array(arr.length), () => []);
  // the array to insert number into
  let targetArr = arr.length - 1;
  // loop over each array
  arr.forEach(i => {
    i.forEach(j => {
      newArr[targetArr].push(j);
      targetArr === 0 ? (targetArr = arr.length - 1) : targetArr--;
    });
  });

  return newArr;
}

module.exports = rotateImage;
