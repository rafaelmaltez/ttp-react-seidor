import React, { Component } from 'react'
import EmployeeForm from '../components/EmployeeForm';

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return (
      <>
        <h1>Cadastro de novo funcioário</h1>
        <p>Informe os dados do novo funcionário e clique em Cadastrar</p>
        <EmployeeForm />
      </>
    )
  }
}
