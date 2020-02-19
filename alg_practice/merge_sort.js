function mergeSort(arr) {
    function merge(arrA, arrB) {
        let merged = []
        const stopPoint = arrA.length + arrB.length
        while (merged.length < stopPoint) {
            if (!arrA.length) {
                merged = [...merged, ...arrB]
            } else if (!arrB.length) {
                merged = [...merged, ...arrA]
            } else if (arrA[0] <= arrB[0]) {
                merged.push(arrA.shift())
            } else if (arrB[0] <= arrA[0]) {
                merged.push(arrB.shift())
            }
        }
        return merged
    }

    if (arr.length > 1) {
        let midPoint = Math.round(arr.length / 2)
        let left = mergeSort(arr.slice(0, midPoint))
        let right = mergeSort(arr.slice(midPoint))
        arr = merge(left, right)
        return arr
    } else {
        return arr
    }
}

module.exports = mergeSort
