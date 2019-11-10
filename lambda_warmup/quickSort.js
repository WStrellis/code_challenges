 function quickSort(a) {
  // if the array is empty or contains only one item, return the array( base case)
  if( a.length < 2 ) {
    return a;
  }
  // if the array has two items sort them and return the sorted array
  else if ( a.length === 2){
    return ( a[0] < a[1] ) ? a : a.reverse(); 
  }
  /* if the array has three or more items select a pivot point, then create two arrays:
    elements with a lower value than the pivot and elements with a higher value
  */
 else{
    let pivotIndex =  Math.round( 0 + Math.random() * (a.length - 1)) ;
    let pivot = a[ pivotIndex ];
    let greater = [];
    let less = [];

    a.forEach((curr, ind)=>{
      // if an item has the same value as the pivot put it in the less array
     if( curr <= pivot && ind !== pivotIndex) {
       less.push( curr );
     } else if ( curr > pivot && ind !== pivotIndex ){
       greater.push( curr );
     };

    })
    // call quickSort on the two subarrays and  combine with the pivot element
    return [ ...quickSort( less), pivot, ...quickSort(greater) ];
  }
}

module.exports.quickSort = quickSort;
