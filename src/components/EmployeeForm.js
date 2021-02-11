import React, { Component } from 'react'

export default class EmployeeForm extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state ={
      nome: '',
      cpf: '',
      dependentes: 0,
      desconto: 0,
      salario: 0 
    };
  }

  componentDidMount() {
    if(this.props.employeeToEdit){
    const { nome = '', cpf = '', dependentes = 0, desconto = 0, salario = 0 } = this.props.employeeToEdit;
    this.setState(() => ({
      nome,
      cpf,
      dependentes,
      desconto,
      salario,
    }))
    }
  }

  handleChange(e) {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }))
  }

  render() {
    const { nome, cpf, salario, dependentes, desconto } = this.state;
    return (
      <div className="form-container">
      <form>
        <div className="form-group">
          <label>
            Nome Completo:<br/>
              <input
              name="nome"
              value={nome}
              onChange={this.handleChange}
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
              value={cpf}
              onChange={this.handleChange}
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
              value={salario}
              onChange={this.handleChange}
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
            value={desconto}
            onChange={this.handleChange}
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
            value={dependentes}
            onChange={this.handleChange}
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
