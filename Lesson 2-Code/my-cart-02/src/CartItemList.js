import React from 'react';
import './CartItemList.css';

class CartItemList extends React.Component {
  render() {
    return <ul>
        <li>
            <h3>Traditional Merlot</h3>
        </li>
        <li>
            <h3>Classic Chianti</h3>
        </li>
    </ul>;
  }
}

export default CartItemList;