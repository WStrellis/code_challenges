'use strict';

// https://www.codewars.com/kata/meeting/train/javascript

function meeting(s){
  let sCopy = s.slice(0); 
  let friendList = [];
  // make the string uppercase
  sCopy = sCopy.toUpperCase();
  // split the string at the semicolons
  sCopy = sCopy.split(';');
  //Loop through sCopy and create a new array with
  // strings in the desired format
  sCopy.forEach((curr)=>{
    // split the current item at the colon
    let names =curr.split(':');
    // add names to friendList
    friendList.push(`(${names[1]}, ${names[0]})`)
  })
  // sort friendsList, combine into a string without spaces, and return
  return friendList.sort().join('');
}

// console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));
// console.log(meeting("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell"));
// console.log(meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"));

module.exports.meeting = meeting;
