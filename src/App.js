import React from 'react';
import Header  from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register'
import Edit from './pages/Edit';

import {  Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/register" component={ Register } />
        <Route path="/edit/:name" component={ Edit } />
      </Switch>
    </div>
  );
}
export default App;
