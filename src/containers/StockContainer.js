import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  sortStocks = (stocks) => {
    if (this.props.isSortedByName) {
      return (
        stocks.sort((a, b) => a.name.localeCompare(b.name))
          .map(stock => <Stock
            stock={stock}
            key={stock.id}
            handleStock={(stock) => this.props.handleBuy(stock)}/>)
      )
    } else if (this.props.isSortedByPrice) {
      return (
        stocks.sort((a, b) => a.price - b.price)
          .map(stock => <Stock
            stock={stock}
            key={stock.id}
            handleStock={(stock) => this.props.handleBuy(stock)}/>)
      )
    } else {
      return (
        stocks.map(stock => <Stock
          stock={stock}
          key={stock.id}
          handleStock={(stock) => this.props.handleBuy(stock)}/>)
      )
    }
  }

  filterStocks = () => {
    return this.props.stocks.filter(stock => stock.type == this.props.filterType)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.sortStocks(this.filterStocks())}
      </div>
    );
  }

}

export default StockContainer;
