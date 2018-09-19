import React from 'react';
import './CartItemList.css';
import CartItem from './CartItem';

class CartItemList extends React.Component {
  render() {
    let items = [
			{code:"P01", name: "Traditional Merlot", image: "", price: 6.5},
			{code:"P02", name: "Classic Chianti", image: "", price: 7.5}
		];
		let itemsComponents = [];

      for (let item of items) {
        itemsComponents.push(<CartItem item={item}/>);
      }

    return <ul>{itemsComponents}</ul>;
  }
}

export default CartItemList;