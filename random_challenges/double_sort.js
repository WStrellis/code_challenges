
function dbSort(a) {
    // 1. split into arrays of numbers and strings
    const nums = a.filter( x => typeof(x) === "number");
    const strs = a.filter( x => typeof(x) === "string");

    // 2. sort each array in ascending order
    const numsSorted = nums.sort((a,b) => a - b);
    const strsSorted = strs.sort();
       
    // 3. add the strings array to the numbers array
     const final = numsSorted.concat(strsSorted);
     console.log(final);
}

dbSort(["hi",7,"7","boobs","yeah",8,55,40,'robot',33,'33'])