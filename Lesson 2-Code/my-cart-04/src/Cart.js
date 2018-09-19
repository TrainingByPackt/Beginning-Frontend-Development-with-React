import React from 'react';
import CartItemList from './CartItemList';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };

    fetch("items.json")
      .then(response => response.json())
      .then(json => {this.setState({items: json})})
      .catch(error => console.log(error));
  }

  render() {
    return <div><h2>Cart</h2><CartItemList items={this.state.items}/></div>;
  }
}

export default Cart;
