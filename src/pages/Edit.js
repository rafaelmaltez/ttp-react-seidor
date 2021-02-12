import React, { Component } from 'react'
import EmployeeForm from '../components/EmployeeForm';
import employees from '../data/employees';

export default class Edit extends Component {
  render() {
    const {match: { params: { name } } } = this.props;
    const employeeToEdit = employees
    .find((employee) => employee.nome === name );    
    return (
      <div>
        <h1>Editar funcionário cadastrado</h1>
        <p>Modifique os dados do funcionário e clique em Cadastrar</p>
        <EmployeeForm employeeToEdit={ employeeToEdit}/>
      </div>
    )
  }
}
