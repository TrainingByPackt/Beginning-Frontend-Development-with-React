import React from 'react';
import './Catalog.css';
import ProductList from './ProductList';
import Cart from './Cart';

class Catalog extends React.Component {
  constructor() {
    super();
    this.state = { products: [], cartItems: [] };

    fetch("products.json")
      .then(response => response.json())
      .then(json => {this.setState({products: json})})
      .catch(error => console.log(error));
  }

  render() {
    return <div>
		<div className="catalog">
	      <h2>Wine Catalog</h2>
	      <ProductList items={this.state.products}/>
        </div>		  
	    <Cart items={this.state.cartItems} />
	  </div>;
  }
}

export default Catalog;
