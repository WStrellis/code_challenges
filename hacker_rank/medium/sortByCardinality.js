function cardinalitySort(nums) {
    // convert each number to binary and count number of 1's
    function getBinaryCardinality(n) {
        // convert to binary
        let nBinary = n.toString(2)
        //count 1's
        return [...nBinary.matchAll(/1/g)].length
    }
    //call nums.sort()
    return nums.sort((a, b) => {
        let binaryDiff = getBinaryCardinality(a) - getBinaryCardinality(b)
        // if binary cardinality is the same sort based on integer value
        return binaryDiff !== 0 ? binaryDiff : a - b
    })
}

console.log(cardinalitySort([1, 2, 3, 4, 5]))
