export function registerEmployeeAction (employee) {
  return {
    type: 'REGISTER_EMPLOYEE',
    employee,
  };
};

export function removeEmployeeAction(employee){
  return { 
    type: 'REMOVE_EMPLOYEE',
    employee,
  };
};
