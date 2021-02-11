import React, { Component } from 'react'
import EmployeeTable from './EmployeeTable';

import employees from '../data/employees';

export default class EmployeesList extends Component {
  render() {
    return (
      <div className='employees-list'>
      <h1 className="main-title">Seus funcionários</h1>
      <EmployeeTable employees={ employees }/> 
      </div>

    )
  }
}
