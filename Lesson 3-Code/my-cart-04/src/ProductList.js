import React from 'react';
import './ProductList.css';
import Product from './Product';

class ProductList extends React.Component {
  render() {
      let products = [];

      for (let product of this.props.items) {
          products.push(<Product item={product} addToCartHandler={this.props.addToCartHandler}/>);
      }

    return <ul>{products}</ul>;
  }
}

export default ProductList;
