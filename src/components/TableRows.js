import React, { Component } from 'react'
import { IRRFDiscountCalc } from '../data/baseCalcs';

export default class TableRows extends Component {
  render() {
    const { employees } = this.props;
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
              <td><button type="button" className="btn-edit">Editar</button></td>
            </tr>
          })}
        </table>
      </div>
    )
  }
}
