export function registerEmployeeAction(employee) {
  return {
    type: 'REGISTER_EMPLOYEE',
    employee,
  };
};

export function updateEmployeeAction(employee) {
  return {
    type: 'UPDATE_EMPLOYEE',
    employee,
  }
}

export function removeEmployeeAction(employee){
  return { 
    type: 'REMOVE_EMPLOYEE',
    employee,
  };
};
