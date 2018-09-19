import React from 'react';
import ShippingMethod from './ShippingMethod';
import { Switch, Route, Link } from 'react-router-dom';

class ShippingMethods extends React.Component {
  renderShippingMethodList() {
      return <ul>
			   <li><Link to="/shippingMethods/ECO">Economic delivery</Link></li>
               <li><Link to="/shippingMethods/STD">Standard delivery</Link></li>
               <li><Link to="/shippingMethods/EXP">Express delivery</Link></li>
             </ul>;
  }

  render() {
    return  <Switch>
              <Route exact path='/shippingMethods' render={this.renderShippingMethodList}/>
              <Route path='/shippingMethods/:code' component={ShippingMethod}/>
            </Switch>;
  }
}

export default ShippingMethods;
