import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  state={
    stocks: [],
    displayStocks: [],
    portfolioStocks: [],
    portfolioStockKey: 0,
    filterType: '',
    // sortType: '',
    sortAlphabetically: false,
    sortByPrice: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(r => r.json())
      .then(stocks => {
        const stocksWithPanelKey = stocks.map(stock => {return({...stock, panel: ''})})
        this.setState({
          stocks: stocksWithPanelKey,
          displayStocks: stocksWithPanelKey
        })
      })
  }

  addStockToPortfolio = (stock) => {
    // !this.state.portfolioStocks.find(s => s.id === stock.id)
    //   ? this.state.portfolioStocks.push(stock)
    //   : alert('no dubs brah') // but maybe dubs
    this.state.portfolioStocks.push(stock)
    this.setState({})
  }

  removeStockFromPortfolio = (stock) => {
    // const stockToDelete = this.state.portfolioStocks.find(s => s.id ===stock.id)
    const remainingPortfolio = this.state.portfolioStocks.filter(s => s.key !== stock.key)
    this.setState({
      portfolioStocks: remainingPortfolio
    })
  }

  handleOnClick = (stock) => {
    const newStock = {...stock, panel: 'portfolio', key: this.state.portfolioStockKey}
    const newKey = this.state.portfolioStockKey + 1
    this.setState({portfolioStockKey: newKey})
    console.log(newStock)
    if (stock.panel === 'stock') {
      // console.log(newStock)
      // this.state.portfolioStocks.push(newStock)
      this.addStockToPortfolio(newStock)
    } else {
      // alert('remove');
      this.removeStockFromPortfolio(stock)
    }

    this.setState({})
  }

  filterStocks = (event) => {
    // console.log(event.target)
    // const filterType = event.target.value
    this.setState({
      filterType: event.target.value
    },
    ()=>{this.displayStocks()})
  }

  sortStocks = (event) => {
    // console.log(event.target)
    if (event.target.value === 'Alphabetically') {
      this.setState({
        sortAlphabetically: true,
        sortByPrice: false
      },
      ()=>{this.displayStocks()})
    } else if (event.target.value === "Price") {
      this.setState({
        // sortType: event.target.value
        sortAlphabetically: false,
        sortByPrice: true
      },
      ()=>{this.displayStocks()})
    }
  }


  sortAlphabetically = () => {
    const sortedStocks = [...this.state.displayStocks].sort((a,b) => a.ticker > b.ticker ? 1 : -1)
    this.setState({
      displayStocks: sortedStocks
    })
  }

  sortByPrice = () => {
    const sortedStocks = [...this.state.displayStocks].sort((a,b) => a.price > b.price ? 1 : -1)
    this.setState({
      displayStocks: sortedStocks
    })
  }

  displayStocks = () => {
    if (this.state.filterType) {
      const filteredStocks = this.state.stocks.filter(stock => stock.type === this.state.filterType)
      this.setState({
        displayStocks: filteredStocks
      },
      ()=>{
        if (this.state.sortAlphabetically === true) {
          this.sortAlphabetically()
        } else if (this.state.sortByPrice === true) {
          this.sortByPrice()
        }
      })
    } else if (this.state.sortAlphabetically === true) {
      this.sortAlphabetically()
    } else if (this.state.sortByPrice === true) {
      this.sortByPrice()
    }
  }

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          stocks={this.state.displayStocks}
          portfolioStocks={this.state.portfolioStocks}
          handleOnClick={this.handleOnClick}
          sortAlphabetically={this.state.sortAlphabetically}
          sortByPrice={this.state.sortByPrice}
          sortStocks={this.sortStocks}
          filterStocks={this.filterStocks} />
      </div>
    );
  }
}

export default App;
