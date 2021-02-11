import React, { Component } from 'react'
import TableRows from './TableRows';

import employees from '../data/employees';

export default class EmployeesList extends Component {
  render() {
    return (
      <div className='employees-list'>
      <h1 className="main-title">Seus funcionários</h1>
      <TableRows employees={ employees }/> 
      </div>

    )
  }
}
