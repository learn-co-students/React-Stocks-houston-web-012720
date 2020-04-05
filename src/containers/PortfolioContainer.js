import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
     console.log(this.props.a)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.a.map(stock => <Stock stock={stock} clicked={this.props.deletefromport} />)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
