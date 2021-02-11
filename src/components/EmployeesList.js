import React, { Component } from 'react'
import EmployeeTable from './EmployeeTable';
import { Provider } from 'react-redux';
import store from '../store';



export default class EmployeesList extends Component {
  render() {
    return (
      <div className='employees-list'>
      <h1 className="main-title">Seus funcionários</h1>
      <Provider store={store}>
        <EmployeeTable />
      </Provider>
      </div>

    )
  }
}
