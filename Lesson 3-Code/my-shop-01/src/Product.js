import React from 'react';

class Product extends React.Component {
  showPrice() {
    alert(this.props.item.price);
  }

  render() {
    return <li onClick={() => this.showPrice()}>
            <h3>{this.props.item.name}</h3>
            <p>{this.props.item.description}</p>
          </li>;
  }
}

export default Product;