const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getCollaboratorForId = data.employees.find((element) =>
    element.id === id).responsibleFor[0];
  return Object.values(data.species.find((element) =>
    element.id === getCollaboratorForId).residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr)));
}

// console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
module.exports = getOldestFromFirstSpecies;
