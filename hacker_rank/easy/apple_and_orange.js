function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const hit = [];
    hit.push(apples.reduce((acc, apple) => {
        let dropPoint = apple + a;
        return (dropPoint >= s && dropPoint <= t) ? acc += 1 : acc;
    }, 0))
    hit.push(oranges.reduce((acc, orange) => {
        let dropPoint = orange + b;
        return (dropPoint >= s && dropPoint <= t) ? acc += 1 : acc;
    }, 0))
    return hit;

}
