import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [],
      stocksDisplay: [],
      stocksTracking: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(stockData => {
      let revStockData = stockData.map( stock => { return {...stock, tracking: false} })
      this.setState({ 
        stocks: revStockData,
        stocksDisplay: revStockData
      })
    })
  }

  toggleTracking = (clickedStock, panel) => {
    if (!clickedStock.tracking && panel === "stocks"){
      clickedStock.tracking = !clickedStock.tracking
      this.state.stocksTracking.push(clickedStock)
    } else if ( clickedStock.tracking && panel === "portfolio" ){
      clickedStock.tracking = !clickedStock.tracking
      let stockIndex = this.state.stocksTracking.indexOf(clickedStock)
      this.state.stocksTracking.splice(stockIndex, 1)
    } else { return } 
    let updatedStocksTracking = this.state.stocksTracking
    this.setState({
      stocksTracking: updatedStocksTracking
    })
  }

  // Instead of a toggle, do a function for adding, a function for deleting. 
  // pass different functions from containers to stocks
  // dont need to add attribute of tracking or not 
  trackStock = (clickedStock) => {
    if (!this.state.stocksTracking.includes(clickedStock)){
      this.state.stocksTracking.push(clickedStock)
      let updatedStocksTracking = this.state.stocksTracking
      this.setState({
        stocksTracking: updatedStocksTracking
      })
    } 
  }
  untrackStock = (clickedStock) => {
    let stockIndex = this.state.stocksTracking.indexOf(clickedStock)
    this.state.stocksTracking.splice(stockIndex, 1)
    let updatedStocksTracking = this.state.stocksTracking
    this.setState({
      stocksTracking: updatedStocksTracking
    })
  }

  handleSort = (event) => {
    let currentList = this.state.stocksDisplay
    let sortedList = []
    switch(event.target.value){
      case("Alphabetically"):
        sortedList = currentList.sort( (stockA, stockB) => stockA.name > stockB.name ? 1 : -1 )
        break
      case("Price"):
        sortedList = currentList.sort( (stockA, stockB) => stockA.price > stockB.price ? 1 : -1 )
        break
    }
    this.setState({
      stocksDisplay: sortedList
    })
  }

  handleFilter = (event) => {
    let currentList = this.state.stocks
    let filteredList = []
    switch(event.target.value){
      case("Tech"):
        filteredList = currentList.filter(stock => stock.type === "Tech")
        break 
      case("Sportswear"):
        filteredList = currentList.filter(stock => stock.type === "Sportswear")
        break 
      case("Finance"): 
        filteredList = currentList.filter(stock => stock.type === "Finance")
       break
      case("None"): 
        filteredList = currentList
    }
    this.setState({
      stocksDisplay: filteredList
    })
    
  }

  render() {
    return (
      <div> 
        <SearchBar handleSort={this.handleSort} handleFilter={this.handleFilter}/>
          <div className="row">
            <div className="col-8">
              {/* <StockContainer stocks={this.state.stocksDisplay} toggleTracking={this.toggleTracking}/> */}
              <StockContainer stocks={this.state.stocksDisplay} track={this.trackStock}/>

            </div>
            <div className="col-4">
              {/* <PortfolioContainer tracking={this.state.stocksTracking} toggleTracking={this.toggleTracking}/> */}
              <PortfolioContainer tracking={this.state.stocksTracking} untrack={this.untrackStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
