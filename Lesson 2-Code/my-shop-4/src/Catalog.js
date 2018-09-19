import React from 'react';
import './Catalog.css';
import ProductList from './ProductList';

class Catalog extends React.Component {
  render() {
    return <div><h2>Wine Catalog</h2><ProductList/></div>;
  }
}

export default Catalog;
