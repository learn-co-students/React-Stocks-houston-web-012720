import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.tracking.map(stock => 
              <Stock 
                stock={stock} 
                key={stock.id} 
                panel="portfolio"
                toggleTracking={this.props.toggleTracking}/>
            )
          }
      </div>
    );
  }

}

export default PortfolioContainer;
