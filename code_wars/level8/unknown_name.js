function list(names){
  // return string variable
  let str = '';

  if( !names.length){
    return str
  } 

  const namesTarget = names.map(entry => entry.name)

  namesTarget.forEach((element, index) => {
    if(index === 0){
      str = element;

  } else if(index === 1){
    str += ' & ' + element;
  }
  else if(index >= 2){
    str = `${element}, ${str}`;
  }})
  return str;
} 

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
// returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]));
// returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'} ]));
// returns 'Bart'

console.log(list([  ]));
// returns ''
