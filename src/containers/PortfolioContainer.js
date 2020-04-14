import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          this.props.myStocks ? this.props.myStocks.map(stock => <Stock stock={stock} updateStock={this.props.sellStock} />) : null
        }
      </div>
    );
  }

}

export default PortfolioContainer;
