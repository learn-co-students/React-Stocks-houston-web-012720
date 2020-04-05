import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {
      stocks: [],
      a: [],
      displayArray: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => this.setState({
      stocks:stocks,
      displayArray: stocks

    }))
  }

  addToport = (stock) => {
    // debugger
    this.setState({a: [...this.state.a, stock]})
  }

  deletefromport = (stocka) => {
    let notdeleteditem = this.state.a.filter(stock => stock !==stocka)
    this.setState({
      a: notdeleteditem
    })
  }

  sortA=()=>{
    let sortme = [...this.state.stocks]
    // debugger
    let sortedarray = sortme.sort((a,b)=>a.name > b.name ? 1:-1)
    //  console.log(sortedarray)
    this.setState({
      displayArray: sortedarray
      
    }, ()=>console.log(this.state.stocks))
  }
  sortP=()=>{
    let sortme = [...this.state.stocks]
    // debugger
    let sortedarray = sortme.sort((a,b)=>a.price > b.price ? 1:-1)
  
    this.setState({
      displayArray: sortedarray
      
    }, ()=>console.log(this.state.stocks))
  }

  filter = (event) => {
    console.log(event)
    let filterme = [...this.state.stocks]
    let filterarray = filterme.filter(stock => stock.type == event)
    this.setState({
      displayArray: filterarray
    })
  }


 

  render() {
    return (
      <div>
        <SearchBar sortA={this.sortA} sortP={this.sortP} filter={this.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayArray} addToport={this.addToport}  a={this.state.a} deletefromport={this.deletefromport} />

            </div>
            <div className="col-4">

              <PortfolioContainer a={this.state.a} deletefromport={this.deletefromport} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
