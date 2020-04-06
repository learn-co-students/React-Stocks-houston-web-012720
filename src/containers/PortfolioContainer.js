import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.props.portfolioStocks.map(stock => {
              // stock.panel = 'portfolio'
              // console.log(stock)
              return(<Stock stock={stock} handleOnClick={this.props.handleOnClick} />)})
          }
      </div>
    );
  }

}

export default PortfolioContainer;
