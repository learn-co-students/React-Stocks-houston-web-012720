import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  displayStock = () => {
    return this.props.stocks.map(stock => 
      <Stock 
        stock = {stock} 
        key = {stock.id} 
        addToPortfolio = {this.props.addToPortfolio} 
        portfolio_stock = {false}
      /> 
    )
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.displayStock()
        }
      </div>
    );
  }

}

export default StockContainer;
