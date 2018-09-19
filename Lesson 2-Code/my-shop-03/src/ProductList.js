import React from 'react';
import './ProductList.css';

class ProductList extends React.Component {
  render() {
    return <ul>
        <li>
            <h3>Traditional Merlot</h3>
            <p>A bottle of middle weight wine, lower in tannins (smoother), with a more red-fruited flavor profile.</p>
        </li>
        <li>
            <h3>Classic Chianti</h3>
            <p>A medium-bodied wine characterized by a marvelous freshness with a lingering, fruity finish</p>
        </li>
        <li>
            <h3>Chardonnay</h3>
            <p>A dry full-bodied white wine with spicy, bourbon-y notes in an elegant bottle</p>
        </li>
        <li>
            <h3>Brunello di Montalcino</h3>
            <p>A bottle of red wine with exceptionally bold fruit flavors, high tannin, and high acidity</p>
        </li>
    </ul>;
  }
}

export default ProductList;
