'use strict';

function sumOfABeach(beach) {
  return Array.from([...beach.matchAll(/fish|sun|water|sand/gi)]).length;
}

console.log(sumOfABeach('saNDsanDSAnD'));
console.log(sumOfABeach('sAnDsandwaTerwatErfishFishsunsunsandwater'));
console.log(sumOfABeach('joifjepiojfoiejfoajoijawoeifjowejfjoiwaefjiaowefjaofjwoj fawojef '));
console.log(sumOfABeach('jwefjwjfsandsandwaterwaterfishfishsunsunsandwateriojwhefa;jawof;jawio;f'));
