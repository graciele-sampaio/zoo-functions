const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const infoCollaborators = data.employees.find((infoColab) => infoColab
    .firstName === employeeName || infoColab.lastName === employeeName);
  return infoCollaborators;
}

// console.log(getEmployeeByName('Burl'));
// console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;
