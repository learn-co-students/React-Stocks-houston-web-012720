import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [],
      display_stocks: [],
      portfolio_stocks: [],
      sortValue: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(stocks => this.setState({stocks,display_stocks: stocks}))
  }

  handleFilter = (value) => {
    let stocks = this.state.stocks 
    let sortValue = this.state.sortValue
    let filterDisplayStocks = value === "All" ? stocks : stocks.filter(stock => stock.type === value)
    this.sortStocks(sortValue,filterDisplayStocks)
  }

  sortStocks = (value, stocks) => {
    let sortDisplayStocks = 
      value === "Alphabetically" ? stocks.sort((a,b) => a.name > b.name ? 1 : -1) 
      : value === "Price" ? stocks.sort((a,b) => a.price - b.price) 
      : stocks
    this.setState({display_stocks: sortDisplayStocks})
  }

  handleSort = (value) => {
    this.setState({sortValue: value})
    this.sortStocks(value,this.state.display_stocks)
  }

  addToPortfolio = (stock) => {
    let portfolio_stocks = this.state.portfolio_stocks
    !portfolio_stocks.includes(stock) 
      ? this.setState({portfolio_stocks: [...portfolio_stocks,stock]}) 
      : alert("You already have this stock in your Portfolio")
  }

  removeFromPortfolio = (stock) => {
    let portfolio_stocks = this.state.portfolio_stocks
    let index = portfolio_stocks.indexOf(stock)
    portfolio_stocks.splice(index,1)
    this.setState({portfolio_stocks})
  }

  render() {
    return (
      <div>
        <SearchBar 
          handleFilter={this.handleFilter}
          handleSort = {this.handleSort}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer 
                stocks = {this.state.display_stocks} 
                addToPortfolio = {this.addToPortfolio}
                // removeFromPortfolio = {this.removeFromPortfolio}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer 
                portfolio_stocks = {this.state.portfolio_stocks} 
                removeFromPortfolio = {this.removeFromPortfolio}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
