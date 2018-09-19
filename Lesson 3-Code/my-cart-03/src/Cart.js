import React from 'react';
import CartItemList from './CartItemList';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = { cartItems: [] };
  }
  
  render() {
    return <div className="cart"><h2>Cart</h2><CartItemList items={this.state.cartItems}/></div>;
  }
  
  componentWillReceiveProps(nextProps) {
	let newCartItemList = [];
	
	for (let item of nextProps.items) {
		let foundItem = newCartItemList.find(x => x.code === item.code);
		if (foundItem) {
			foundItem.quantity = foundItem.quantity + 1;
		} else {
			item.quantity = 1;
			newCartItemList.push(item);
		}
		
		this.setState({ cartItems: [...newCartItemList] });
	}
  }
}

export default Cart;
