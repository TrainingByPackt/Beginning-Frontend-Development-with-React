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
  
  select(productCode) {
    let productList = this.state.products.map(function(p) {
		if (p.code === productCode) {
			p.selected = (!p.selected);
		}
		return p;
	});
    this.setState({products: productList});
  }

  render() {
    return <div><h2>Wine Catalog</h2><ProductList items={this.state.products} selectHandler={this.select.bind(this)}/></div>;
  }
}

export default Catalog;

