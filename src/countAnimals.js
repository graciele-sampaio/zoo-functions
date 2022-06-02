const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

const allSpecies = () => {
  const animalsAndResidents = species;
  const listAnimals = {};
  animalsAndResidents.forEach((eachAnimal) => {
    listAnimals[eachAnimal.name] = eachAnimal.residents.length;
  });
  return listAnimals;
};

const animalSex = (animal) => species.reduce((objAcumulator, eachSpecie) =>
  ((eachSpecie.name === animal.specie)
    ? eachSpecie.residents.filter((element) =>
      element.sex === animal.sex).length : objAcumulator), 0);

function countAnimals(animal) {
  if (!animal) return allSpecies();
  if (Object.keys(animal).includes('sex')) {
    return animalSex(animal);
  }
  return species.reduce((acc, cur) =>
    (cur.name === animal.specie
      ? cur.residents.length : acc));
}

// console.log(animalSex('bears', 'male'));
// console.log(countAnimals('giraffes'));
module.exports = countAnimals;
