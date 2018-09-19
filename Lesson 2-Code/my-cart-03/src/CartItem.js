import React from 'react';

class CartItem extends React.Component {
  render() {
    return <li>
            <h3>{this.props.item.name}</h3>
          </li>;
  }
}

export default CartItem;