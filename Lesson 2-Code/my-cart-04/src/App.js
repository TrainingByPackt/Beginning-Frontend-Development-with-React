import React, { Component } from 'react';
import './App.css';
import Cart from './Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">The Cart App</h1>
      </header>
      <Cart />
      </div>
    );
  }
}

export default App;
