import React, { Component } from 'react'

export default class EmployeeForm extends Component {
  render() {
    return (
      <div className="form-container">
      <form>
        <div className="form-group">
          <label>
            Nome Completo:<br/>
              <input
              name="nome"
              type="text"
              placeholder="Ex: Rafael Maltez de A. Costa"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            CPF:<br/>
            <input
              name="cpf"
              type="text"
              placeholder="Ex: 000.000.000-00"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Salário Bruto<br/>
            <input
              name="salario"
              type="number"
              step={0.01}
              placeholder="Informe o salario"
              required
            />
          </label>
        </div>
        <div className="form-group">
        <label>
          Desconto da previdencia<br/>
            <input
            name="desconto"
            type="number"
            step={0.01}
            placeholder="Informe o desconto"
            required
          />
        </label>              
        </div>
        <div className="form-group">
        <label>
          Dependentes:<br/>
            <input
            type="number"
            min={0}
            placeholder="Nº de dependentes"
            required
          />
        </label>              
          </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
    )
  }
}
