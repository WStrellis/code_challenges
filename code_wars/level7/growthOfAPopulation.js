
function nbYear( p0, percent, aug, p){
  //return number of years to equal or exceed p
  let years = 0;
  while( p0 < p){
    p0 = p0  + ( p0 * ( percent / 100)) + aug
    years += 1;
  }
  return  years
}

module.exports = nbYear;
