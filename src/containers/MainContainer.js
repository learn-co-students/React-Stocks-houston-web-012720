import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar handleSortName={(event) => this.props.handleSortName(event)}
                   handleSortPrice={(event) => this.props.handleSortPrice(event)}
                   handleFilter={(event) => this.props.handleFilter(event)}
                   isSortedByName={this.props.isSortedByName}
                   isSortedByPrice={this.props.isSortedByPrice}/>
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.props.stocks}
                              filterType={this.props.filterType}
                              handleBuy={(stock) => this.props.handleBuy(stock)}
                              isSortedByName={this.props.isSortedByName}
                              isSortedByPrice={this.props.isSortedByPrice}/>
            </div>
            <div className="col-4">
              <PortfolioContainer portfolio={this.props.portfolio} 
                                  handleSell={(stock) => this.props.handleSell(stock)}
                                  isSortedByName={this.props.isSortedByName}
                                  isSortedByPrice={this.props.isSortedByPrice}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
