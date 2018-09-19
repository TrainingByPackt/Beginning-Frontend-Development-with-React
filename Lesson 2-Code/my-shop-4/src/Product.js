import React from 'react';

class Product extends React.Component {
  render() {
    return <li>
            <h3>{this.props.item.name}</h3>
            <p>{this.props.item.description}</p>
          </li>;
  }
}

export default Product;
