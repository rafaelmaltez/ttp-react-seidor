const registerEmployeeAction = (employee) => ({
  type: 'REGISTER_EMPLOYEE',
  employee,
});

const removeEmployeeAction = (employee) => ({
  type: 'REMOVE_EMPLOYEE',
  employee,
});

const updateEmployeeAction = (employee) => ({
  type: 'UPDATE_EMPLOYEE',
  employee,
});