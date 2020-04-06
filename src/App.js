import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const API = "http://localhost:3000/stocks"

class App extends Component {

  constructor() {
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      isSortedByName: false,
      isSortedByPrice: false,
      filterType: "Tech"
    }
  }

  fetchStocks = () => {
    fetch(API)
      .then(res => res.json())
      .then(stocks => {
        console.log(stocks)
        this.setState({stocks: stocks})
      })
  }

  handleBuy = (stock) => {
    this.state.portfolio.includes(stock)
      ? null
      : this.setState({portfolio: [...this.state.portfolio, stock]})
  }

  handleSell = (stock) => {
    this.setState({portfolio: [...this.state.portfolio.filter(s => s.name !== stock.name)]})
  }

  handleSortName = () => {
    this.setState({isSortedByPrice: false})
    this.setState({isSortedByName: !this.state.isSortedByName})
  }

  handleSortPrice = () => {
    this.setState({isSortedByName: false})
    this.setState({isSortedByPrice: !this.state.isSortedByPrice})
  }

  handleFilter = (event) => {
    this.setState({filterType: event.target.value})
  }

  componentDidMount() {
    this.fetchStocks()
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.stocks} portfolio={this.state.portfolio}
                       filterType={this.state.filterType}
                       handleBuy={(stock) => this.handleBuy(stock)}
                       handleSell={(stock) => this.handleSell(stock)}
                       handleSortName={(event) => this.handleSortName(event)}
                       handleSortPrice={(event) => this.handleSortPrice(event)}
                       handleFilter={(event) => this.handleFilter(event)}
                       isSortedByName={this.state.isSortedByName}
                       isSortedByPrice={this.state.isSortedByPrice}/>
      </div>
    );
  }
}

export default App;
