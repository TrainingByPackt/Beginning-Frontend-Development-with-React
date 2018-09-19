import React from 'react';
import './CartItemList.css';
import CartItem from './CartItem';

class CartItemList extends React.Component {
  render() {
    let items = [];
    
          for (let item of this.props.items) {
              items.push(<CartItem item={item}/>);
          }

    return <ul>{items}</ul>;
  }
}

export default CartItemList;