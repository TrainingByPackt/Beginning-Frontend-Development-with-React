import React from 'react';

class WineMaker extends React.Component {
  constructor() {
    super();
      this.wineMakers = [
        {code: "WM1", name: "Wine & Wine", country: "Italy", description:"Wine & Wine produces an excellent Italian wine..."},
        {code: "WM2", name: "Wine & Co", country: "France", description:"Wine & Co is one of the most known producers of wine in France..."}
      ];
  }
    
    
  render() {
    let wineMaker = this.wineMakers.find(wm => wm.code === this.props.match.params.code);
    return <div>
            <h2>{wineMaker.name}</h2>
            <h3>{wineMaker.country}</h3>
            <p>{wineMaker.description}</p>
           </div>;
  }
}

export default WineMaker;