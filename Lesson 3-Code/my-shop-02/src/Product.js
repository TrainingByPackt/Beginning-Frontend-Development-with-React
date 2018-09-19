import React from 'react';
import './Product.css'

class Product extends React.Component {
  select() {
    this.props.item.selected = !this.props.item.selected;
  }

  render() {
    let classToApply = this.props.item.selected? "selected": "";

    return <li onClick={() => this.select()} className={classToApply}>
            <h3>{this.props.item.name}</h3>
            <p>{this.props.item.description}</p>
          </li>;
  }
}

export default Product;

//Not working as expected
