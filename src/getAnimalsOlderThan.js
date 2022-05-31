const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((element) => element.name === animal).residents
    .every((animalAge) => animalAge.age >= age);
}

console.log(getAnimalsOlderThan('tigers', 4));
console.log(getAnimalsOlderThan('lions', 16));

module.exports = getAnimalsOlderThan;
