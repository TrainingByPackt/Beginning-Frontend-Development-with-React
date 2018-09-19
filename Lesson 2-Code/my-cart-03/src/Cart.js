import React from 'react';
import CartItemList from './CartItemList';

class Cart extends React.Component {
  render() {
    return <div><h2>Cart</h2><CartItemList/></div>;
  }
}

export default Cart;
