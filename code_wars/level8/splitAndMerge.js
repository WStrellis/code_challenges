'use strict'

function splitAndMerge(str, sep){
    // divide sentence into words
   let step1 = str.split(' ');
   //  divide each word into characters
   let step2 = step1.map((i) => i.split(''));
   //  join each word with the sep
   let step3 = step2.forEach((i) => i.split(sep));
   // join each work with a space
   let step4 = step3.join(' ');
   return step4;
}

console.log(splitAndMerge('My name is John',' '));
console.log(splitAndMerge('My name is John','-'));
console.log(splitAndMerge('Hello World!','.'));
console.log(splitAndMerge('Hello World!',','));
