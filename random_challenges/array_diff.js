
// This function takes two arrays as input parameters
// It removes any items from array B that are in array A and 
// returns A after performing this process
function arrayDiff(a,b){
    // const modded = a.filter( x => !b.includes(x));
    return a.filter( x => !b.includes(x));
    // return modded;
}

console.log(arrayDiff([],[4,5]));
console.log(arrayDiff([1,7],[7]));
console.log(arrayDiff([2,6,8],[8,2,6]));
console.log(arrayDiff([2,6,8,4534,23,54,63,6,6,23,2,34,8,23],[8,2,6]));
