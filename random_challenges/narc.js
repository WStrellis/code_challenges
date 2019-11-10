var myNumber = 153;


function isNarcissistic(n) {
    var sum = 0;
    for (let i of String(n)) {
    sum += Number(i) ** String(n).length;
    };
    return (n === sum) ? true :  false;
}

console.log(isNarcissistic(myNumber));
