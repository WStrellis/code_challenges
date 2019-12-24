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
  // make a copy of arr
  let copy = [...arr];
  // loop over each array
  let cursor;
  arr.forEach((i, iIndx) => {
    cursor = arr.length - 1;
    console.log('cursor', cursor);
    i.forEach(j => {
      copy[cursor][iIndx] = j;
      cursor--;
      console.log('cursor', cursor);
    });
  });

  return copy;
}

module.exports = rotateImage;
