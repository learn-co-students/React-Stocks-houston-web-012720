import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  sortPortfolio = () => {
    if (this.props.isSortedByName) {
      return (
        this.props.portfolio.sort((a, b) => a.name.localeCompare(b.name))
          .map(stock => <Stock
            stock={stock}
            key={stock.id}
            handleStock={(stock) => this.props.handleSell(stock)}/>)
      )
    } else if (this.props.isSortedByPrice) {
      return (
        this.props.portfolio.sort((a, b) => a.price - b.price)
          .map(stock => <Stock
            stock={stock}
            key={stock.id}
            handleStock={(stock) => this.props.handleSell(stock)}/>)
      )
    } else {
      return (
        this.props.portfolio.map(stock => <Stock
          stock={stock}
          key={stock.id}
          handleStock={(stock) => this.props.handleSell(stock)}/>)
      )
    }
  }

  filterPortfolio = () => {
    
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.sortPortfolio()}
      </div>
    );
  }

}

export default PortfolioContainer;
