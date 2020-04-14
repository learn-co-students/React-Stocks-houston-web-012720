import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      stocks: [],
      displayStocks: [],
      myStocks: [],
      syleDisplay: ""
    }
  }

  componentDidMount() {
    this.getStocks()
  }

  getStocks = () => {
    fetch("http://localhost:3000/stocks")
      .then(res => res.json())
      .then(stocks => {
        this.setState({
          stocks,
          displayStocks: stocks
        })
      })
  }

  buyStock = (stock) => {
    if (!this.state.myStocks.includes(stock)) {
      this.setState({
        myStocks: [...this.state.myStocks, stock]
      })
    }
    else { alert("You already own this stock!") }
  }

  sellStock = (stock) => {
    this.setState({
      myStocks: this.state.myStocks.filter(s => s !== stock)
    })
  }

  // updateSortMethod = (sortMethod) => {
  //   this.setState({
  //     sortMethod
  //   })
  // }

  sortStocks = (sortMethod) => {
    if (sortMethod === "Alphabetically") {
      this.setState({
        displayStocks: this.state.displayStocks.sort((a, b) => a.name.localeCompare(b.name)),
        myStocks: this.state.myStocks.sort((a, b) => a.name.localeCompare(b.name))
      })
    }
    else if (sortMethod === "Price") {
      this.setState({
        displayStocks: this.state.displayStocks.sort((a, b) => a.price - b.price),
        myStocks: this.state.myStocks.sort((a, b) => a.price - b.price)
      })
    }
  }

  filterStocks = (filter) => {
    if (filter !== "All") {
      this.setState({
        displayStocks: this.state.stocks.filter(stock => stock.type === filter)
      })
    }
    else {
      this.setState({
        displayStocks: this.state.stocks
      })
    }
  }

  render() {
    return (
      <div>
        <SearchBar updateSortMethod={this.updateSortMethod} sortStocks={this.sortStocks} filterStocks={this.filterStocks} />

        <div className="row">
          <div className="col-8">

            <StockContainer displayStocks={this.state.displayStocks} buyStock={this.buyStock} />

          </div>
          <div className="col-4">

            <PortfolioContainer myStocks={this.state.myStocks} sellStock={this.sellStock} />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
