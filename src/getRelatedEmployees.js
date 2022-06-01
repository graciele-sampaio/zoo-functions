const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((personId) => personId.managers.includes(id));
}
function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((element) => element.managers.includes(managerId))
    .map((elementManager) => `${elementManager.firstName} ${elementManager.lastName}`);
}
// console.log(getRelatedEmployees('stephanieId'));
module.exports = { isManager, getRelatedEmployees };
