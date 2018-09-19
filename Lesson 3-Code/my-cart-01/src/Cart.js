import React from 'react';
import CartItemList from './CartItemList';

class Cart extends React.Component {
  render() {
    return <div className="cart"><h2>Cart</h2><CartItemList items={this.props.items}/></div>;
  }
}

export default Cart;
