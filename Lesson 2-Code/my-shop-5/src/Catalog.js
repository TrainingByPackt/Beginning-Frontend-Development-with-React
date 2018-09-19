import React from 'react';
import './Catalog.css';
import ProductList from './ProductList';

class Catalog extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };

    fetch("products.json")
      .then(response => response.json())
      .then(json => {this.setState({products: json})})
      .catch(error => console.log(error));
  }

  render() {
    return <div><h2>Wine Catalog</h2><ProductList items={this.state.products}/></div>;
  }
}

export default Catalog;
