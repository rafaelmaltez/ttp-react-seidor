import React from 'react';
import Header  from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register'

import {  Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/register" component={ Register } />
      </Switch>
    </div>
  );
}

export default App;
