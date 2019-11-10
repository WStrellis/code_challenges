
function pillars(numPillars,pillSpace,pillWidth) {
    var pSpacing = pillSpace * 100
    if (numPillars === 1) {
        console.log("0");
    }
    else if (numPillars === 2) {
        console.log(pSpacing);
    }
    else {
        console.log(((numPillars - 2)* pillWidth)+((numPillars - 1)*pSpacing));
    }
}