import React from 'react';
import WineMaker from './WineMaker';
import { Switch, Route, Link } from 'react-router-dom';

class WineMakers extends React.Component {
  renderWineMakersList() {
      return <ul>
               <li><Link to="/winemakers/WM1">Wine & Wine</Link></li>
               <li><Link to="/winemakers/WM2">Wine & Co</Link></li>
             </ul>;
  }

  render() {
    return  <Switch>
              <Route exact path='/winemakers' render={this.renderWineMakersList}/>
              <Route path='/winemakers/:code' component={WineMaker}/>
            </Switch>;
  }
}

export default WineMakers;
