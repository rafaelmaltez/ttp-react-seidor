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
        <h2>Informe os dados do funcionário:</h2>
        <EmployeeForm />
      </>
    )
  }
}
