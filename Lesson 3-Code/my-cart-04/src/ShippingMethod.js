import React from 'react';

class ShippingMethod extends React.Component {
  constructor() {
    super();
      this.shippingMethods = [
        {code: "ECO", name: "Economic delivery", description:"You will receive the goods in 5-6 days", price: 3.00},
        {code: "STD", name: "Standard delivery", description:"You will receive the goods in 3-4 days", price: 5.00},
		{code: "EXP", name: "Express delivery", description:"You will receive the goods in 1 day", price: 8.00}
      ];
  }
    
    
  render() {
    let shippingMethod = this.shippingMethods.find(sm => sm.code === this.props.match.params.code);
    return <div>
            <h2>{shippingMethod.name}</h2>
            <p>{shippingMethod.description}</p>
            <p>Price: {shippingMethod.price}</p>
           </div>;
  }
}

export default ShippingMethod;