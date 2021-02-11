const INITIAL_STATE = []

function employeeReducer(state = INITIAL_STATE, action){
  switch(action.type) {
    case 'REGISTER_EMPLOYEE':
      return [...state, action.employee]
    case 'REMOVE_EMPLOYEE':
      const newState = state
        .filter((employee) => employee.cpf !== action.employee.cpf);
      return newState;
    case 'UPDATE_EMPLOYEE':
      // const updatedEmployee = action.employee;
      const updateState = state
        .map((employee) => {
          if(employee.cpf === action.employee.cpf){
            return {...employee, ...action.employee};
          }
          return employee;
        });
      return updateState;
    default:
      return state;
  }
}

export default employeeReducer;