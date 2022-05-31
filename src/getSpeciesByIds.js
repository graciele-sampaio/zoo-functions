const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === []) {
    return [];
  }
  const filteredSpecies = data.species.filter((speciesId) => ids.includes(speciesId.id));
  return filteredSpecies;
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
