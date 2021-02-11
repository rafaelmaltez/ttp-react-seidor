import React, { Component } from 'react'

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
              <td>150</td>
              <td><button type="button" className="btn-delete">Delete</button></td>
              <td>Editar</td>
            </tr>
          })}
        </table>
      </div>
    )
  }
}
