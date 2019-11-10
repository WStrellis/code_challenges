

function findUnique(a) {
    const sorted = a.sort();
   return (sorted[0] === sorted[1]) ? sorted[sorted.length - 1] : sorted[0]; 
}

console.log(findUnique([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUnique([ 2, 2, 1, 2, 2, 2 ]));
