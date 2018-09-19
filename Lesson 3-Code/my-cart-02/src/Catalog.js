import React from 'react';
import './Catalog.css';
import ProductList from './ProductList';
import Cart from './Cart';

class Catalog extends React.Component {
  constructor() {
    super();
    this.state = { products: [], cartItems: [] };
	this.addToCart = this.addToCart.bind(this);

    fetch("products.json")
      .then(response => response.json())
      .then(json => {this.setState({products: json})})
      .catch(error => console.log(error));
  }
  
  addToCart(item) {
	  this.setState({cartItems: [...this.state.cartItems, item]});
  }

  render() {
    return <div>
		<div className="catalog">
	      <h2>Wine Catalog</h2>
	      <ProductList items={this.state.products} addToCartHandler={this.addToCart}/>
        </div>		  
	    <Cart items={this.state.cartItems} />
	  </div>;
  }
}

export default Catalog;
