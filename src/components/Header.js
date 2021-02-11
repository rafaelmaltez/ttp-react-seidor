import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to='/'>Inicio</Link>
          <Link to="/register">Cadastro de Novos Funcionários</Link>
        </nav>
      </header>     
    )
  }
}
