import React, { Component } from 'react';
import './App.css';
import Catalog from './Catalog';
import ShippingMethods from './ShippingMethods';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">The Cart App</h1>
          <nav>
            <ul>
              <li><Link to='/'>Catalog</Link></li>
              <li><Link to='/shippingMethods'>Shipping Methods</Link></li>
            </ul>
          </nav>
      </header>
		<Switch>
		   <Route exact path='/' component={Catalog}/>
           <Route path='/shippingMethods' component={ShippingMethods}/>
		</Switch>
      </div>
    );
  }
}

export default App;
