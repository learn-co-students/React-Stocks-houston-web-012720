import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        {/* can only sort once each, need to send back event target to revert other radio buttonchecked to null? */}
        <SearchBar 
          sortAlphabetically={this.props.sortAlphabetically}
          sortByPrice={this.props.sortByPrice}
          sortStocks={this.props.sortStocks}
          filterStocks={this.props.filterStocks} />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.props.stocks}
                handleOnClick={this.props.handleOnClick} />

            </div>
            <div className="col-4">

              <PortfolioContainer
                portfolioStocks={this.props.portfolioStocks}
                handleOnClick={this.props.handleOnClick} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
