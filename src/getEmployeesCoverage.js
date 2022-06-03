const data = require('../data/zoo_data');

const { employees, species } = data;

function infoEmployee(identifier) {
  if (!identifier) return undefined;
  const informations = Object.values(identifier)[0];
  const employee = employees.find((element) =>
    element.firstName.includes(informations)
    || element.lastName.includes(informations)
    || element.id.includes(informations));
  if (!employee) { throw new Error('Informações inválidas'); }
  const idOfTheAnimal = employee.responsibleFor;
  const informationsAnimals = species.filter((animal) => idOfTheAnimal.includes(animal.id));
  const animalsName = informationsAnimals.map((element) => element.name);
  const animalsLoc = informationsAnimals.map((element) => element.location);
  const result = {
    id: employee.id,
    fullName: (`${employee.firstName} ${employee.lastName}`),
    species: animalsName,
    locations: animalsLoc,
  };
  return result;
}
function notParameter() {
  const array = [];
  const idPeople = employees.map((person) => person.id);
  idPeople.forEach((element) => array.push(infoEmployee({ key: element })));
  return array;
}

function getEmployeesCoverage(identifier) {
  if (infoEmployee(identifier) === undefined) return notParameter();
  return infoEmployee(identifier);
}

module.exports = getEmployeesCoverage;
