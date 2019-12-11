// https://www.codewars.com/kata/pairs-of-bears/train/javascript
/* 
in order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.

You must check within string (s) to find all of the mating pairs, and return a string containing only them. Line them up for inspection.

Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).

Return an array containing a string of only the mating pairs available. e.g:

'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)

and true if the number is more than or equal to x, false if not:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];

x  will always be a positive integer, and s will never be empty
*/

// My solution
function bears(x, s) {
  let matingPairs = '';
  let numPairs = 0;
  let idx = 0;

  function isPair(str, i) {
    let combined = str[i] + str[i + 1];
    return combined === '8B' || combined === 'B8' ? combined : false;
  }

  while (idx < s.length - 1) {
    const result = isPair(s, idx);
    if (result) {
      matingPairs += result;
      numPairs++;
      idx += 2;
    } else {
      idx++;
    }
  }

  return [matingPairs, numPairs >= x];
}

/* Other's solution

function bears(x, s) {
  var pairs = s.match(/(8B)|(B8)/g) || [];
  return [pairs.join(''), pairs.length >= x];
}
*/

module.exports = bears;
