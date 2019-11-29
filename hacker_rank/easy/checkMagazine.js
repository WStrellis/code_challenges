// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function checkMagazine(magazine, note) {
  //track yes/no
  let isGoodNote = 'Yes';
  //count number of words in the magazine
  let magWords = {};
  magazine.forEach(word => {
    magWords[word] ? (magWords[word] += 1) : (magWords[word] = 1);
  });
  // loop through note
  for (let i = 0; i < note.length; i++) {
    // find each word in the magazine
    /* if the value is 0 or undefined break the loop and 
  set isGoodNote to 'No' */
    if (!magWords[note[i]]) {
      isGoodNote = 'No';
      break;
    } else {
      /* if the magazine has the word subtract one from the value for that word */
      magWords[note[i]] -= 1;
    }
  }

  // console.log result
  console.log(isGoodNote);
}

module.exports = checkMagazine;
