import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  displayStocks = () => {
    return this.props.portfolio_stocks.map(stock => 
      <Stock 
        stock ={stock} 
        portfolio_stock = {true} 
        key = {`${stock.id} portfolio_stocks`}
        removeFromPortfolio = {this.props.removeFromPortfolio}
      />
    )
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.displayStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
