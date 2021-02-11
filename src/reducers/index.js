const INITIAL_STATE = []

function employeeReducer(state = INITIAL_STATE, action){
  switch(action.type) {
    case 'ADD_EMPLOYEE':
      return [...state, action.employee]
    case 'DELETE_EMPLOYEE':
      const newState = state
        .filter((employee) => employee.cpf !== action.employee.cpf);
      return newState;
    case 'UPDATE_EMPLOYEE':
      const updatedEmployee = action.employee;
      const updateState = state
        .map((employee) => {
          if(employee.cpf === updatedEmployee.cpf){
            return {...employee, ...updatedEmployee};
          }
          return employee;
        });
      return updateState;
    default:
      return state;
  }
}

export default employeeReducer;