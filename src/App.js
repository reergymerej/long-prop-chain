import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Quux = () => (
  <div className="Quux box">
    <div>Quux</div>
  </div>
)

const Baz = () => (
  <div className="Baz box">
    <div>Baz</div>
    <Quux />
  </div>
)

const Bar = () => (
  <div className="Bar box">
    <div>Bar</div>
    <Baz />
  </div>
)

const Foo = () => (
  <div className="Foo box">
    <div>Foo</div>
    <Bar />
  </div>
)

const Left = () => (
  <div className="Left box">
    <div>Left</div>
    <Foo />
  </div>
)

const Right = () => (
  <div className="Right box">
    <div>Right</div>
    <Foo />
  </div>
)

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
