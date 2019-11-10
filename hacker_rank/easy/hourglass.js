function hourglassSum(arr) {
    let max = null;

    function scoreHourGlass( currLoopCount, currIndex, array ) {
        let firstRow = array[currLoopCount][currIndex] + array[currLoopCount][currIndex + 1] + array[currLoopCount][currIndex + 2];
        let secondRow = array[currLoopCount + 1][currIndex + 1];
        let thirdRow = array[currLoopCount + 2][currIndex] + array[currLoopCount + 2][currIndex + 1] + array[currLoopCount + 2][currIndex + 2]
        return firstRow + secondRow + thirdRow;
    }// end scoreHourGlass

    for (let i = 0; i < 4; i++){
        arr.slice(0, 4).forEach((item, ind) => {
            let result = scoreHourGlass(i, ind, arr) 
            if( result > max || max === null) max = result;
        })
    }// end for
    return max;
}


module.exports = hourglassSum;
