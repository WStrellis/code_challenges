function sumPetYears( arr, kind, mult){
  return arr.reduce(( acc, curr ) => ( curr.species === kind )? acc += ( curr.age * mult): acc, 0)
}

const pets = [
  {
    name: 'Tinkerbell',
    species: 'cat',
    age: 2
  },
  {
    name: 'Lucy',
    species: 'dog',
    age: 12
  },
  {
    name: 'Chloe',
    species: 'cat',
    age: 18
  },
  {
    name: 'Mojo',
    species: 'dog',
    age: 6
  },
  {
    name: 'Olivia',
    species: 'parakeet',
    age: 4
  },
  {
    name: 'Shadow',
    species: 'cat',
    age: 8
  },
  {
    name: 'Oreo',
    species: 'cat',
    age: 5
  },
  {
    name: 'Molly',
    species: 'dog',
    age: 4
  },
  {
    name: 'Freddie Prinze Jr.',
    species: 'parakeet',
    age: 9
  }
];

module.exports = { 
  pets,
  sumPetYears
}
