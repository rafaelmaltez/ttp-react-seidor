import React, { Component } from 'react'
import EmployeeTable from './EmployeeTable';
import { Provider } from 'react-redux';
import store from '../store';



export default class EmployeesList extends Component {
  render() {
    return (
      <div className='employees-list'>
        <h1>Tabelas e cálculos do IRRF</h1>
        <p>A tabela do IR é um dos principais instrumentos para auxiliar os contribuintes na hora de enviar as informações fiscais para a receita. Afinal, é nesse documento que constam as aliquotas do Imposto de Renda</p>
        <p>Isso quer dizer que é essa a fonte para você saber qual é o percentual que deve ser aplicado sobre os seus rendimentos. Portanto, na hora de fazer o cálculo e declarar seus rendimentos, ter essa tabela é fundamental para que você não envie nenhum dado errado e, consequentemente, não caia na malha fina</p>
        <h1 className="main-title">Seus funcionários</h1>
        <Provider store={store}>
          <EmployeeTable />
        </Provider>
      </div>

    )
  }
}
