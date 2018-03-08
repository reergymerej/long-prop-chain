import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Left from './Left'
import Right from './Right'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Left />
        <Right />
      </div>
    );
  }
}

export default App;
