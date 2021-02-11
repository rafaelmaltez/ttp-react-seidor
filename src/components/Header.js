import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/register">Registrar Funcionário</Link>
          <Link to='/'>Tabelas e cálculos do IRRF</Link>
        </nav>
      </header>     
    )
  }
}
