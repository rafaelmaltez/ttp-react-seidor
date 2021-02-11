import React, { Component } from 'react'
import { IRRFDiscountCalc } from '../data/baseCalcs';
import { connect } from 'react-redux';
import { removeEmployeeAction } from '../actions';

import { Redirect } from 'react-router-dom';

class EmployeeTable extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      shouldRedirect: false,
      currentEmployee: '',
    }
  }

  handleClick(e) {
    this.setState(() => ({
      currentEmployee: e.target.name,
      shouldRedirect:true,
    }))
  }

  render() {
    const { employees, remove } = this.props;
    const { shouldRedirect, currentEmployee } = this.state;
    if(shouldRedirect) return <Redirect to={`/edit/${currentEmployee}`} />;
    return (
      <div>
        <table>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Salário</th>
            <th>Desconto</th>
            <th>Dependentes</th>
            <th>Desconto IRPF</th>            
          </tr>
           
         {employees
          .map((employee, index) => {
            const { nome, cpf, salario, desconto, dependentes } = employee;
            return <tr key={index + 1}>
              <td>{nome}</td>
              <td>{cpf}</td>
              <td>{salario}</td>
              <td>{desconto}</td>
              <td>{dependentes}</td>
              <td>{IRRFDiscountCalc(employee)}</td>
              <td><button type="button" className="btn-delete" onClick={() => remove(employee)}>Delete</button></td>
              <td><button name={nome} type="button" className="btn-edit" onClick={this.handleClick}>Editar
              </button></td>
            </tr>
          })}
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  employees: state.employeeReducer,
});
const mapDispatchToProps = dispatch => ({
  remove: (employee) => dispatch(removeEmployeeAction(employee))
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTable);