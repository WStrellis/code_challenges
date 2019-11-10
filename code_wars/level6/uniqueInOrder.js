 const uniqueInOrder = function(iterable){
  return Array.from(iterable).filter(( current, ind, iterable )=>  {
     return ( current !== iterable[ ind + 1])? true : false; } 
    ) 
}


module.exports =  uniqueInOrder ;
