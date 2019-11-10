function maxMultiple(divisor, bound){
  let largest = 0;
  for( let i = 1; i <= bound ; i++){
    ( i % divisor === 0 )? largest = i: false;
  }
  return largest;
}

module.exports = maxMultiple
