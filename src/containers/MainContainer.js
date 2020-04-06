import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      filter: "",
      sortAlphabetically: true
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(json => this.setState({stocks: json}))
  }

  buyStock = (stock) => this.setState({portfolio: [...this.state.portfolio.filter(s => s.id !== stock.id), stock]})
  sellStock = (stock) => this.setState({portfolio: this.state.portfolio.filter(s => s.id !== stock.id)})

  changeFilter = (filter) => {
    filter === 'All'?filter = '':null
    this.setState({filter})
  }

  changeSorting = () => this.setState({sortAlphabetically: !this.state.sortAlphabetically})

  getStocks = () => {
    let stocks = this.state.stocks.filter(s => s.type.includes(this.state.filter))
    if (this.state.sortAlphabetically) {
      return stocks.sort((a,b) => a.name > b.name ? 1 : -1)
    }
    else {
      return stocks.sort((a,b) => b.price - a.price)
    }
  }

  render() {
    return (
      <div>
        <SearchBar sortAlphabetically = {this.state.sortAlphabetically} changeFilter = {this.changeFilter} changeSorting = {this.changeSorting}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks = {this.getStocks()} buyStock = {this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks = {this.state.portfolio} sellStock = {this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
