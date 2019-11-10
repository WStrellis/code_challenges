 function isTwinPrime(n) {

  if(n <3) return false; 

  const isPrime = (num)=>{
    let prime = true;
    for(let i = 2; i < num; i++){
      if(num % i === 0) prime = false;
    }
    return prime;
  }
  return ( isPrime(n) && ( isPrime(n - 2) || isPrime(n + 2)));
}

module.exports.isTwinPrime = isTwinPrime;
