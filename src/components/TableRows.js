import React, { Component } from 'react'
import { IRRFDiscountCalc } from '../data/baseCalcs';

import { Redirect } from 'react-router-dom';

export default class TableRows extends Component {
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
    const { employees } = this.props;
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
          .map((employee) => {
            const { nome, cpf, salario, desconto, dependentes } = employee;
            return <tr>
              <td>{nome}</td>
              <td>{cpf}</td>
              <td>{salario}</td>
              <td>{desconto}</td>
              <td>{dependentes}</td>
              <td>{IRRFDiscountCalc(employee)}</td>
              <td><button type="button" className="btn-delete">Delete</button></td>
              <td><button name={nome} type="button" className="btn-edit" onClick={this.handleClick}>Editar
              </button></td>
            </tr>
          })}
        </table>
      </div>
    )
  }
}
