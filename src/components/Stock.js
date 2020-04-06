import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onClick={()=>{props.handleOnClick(props.stock)}}> {/* Needs to check if stock is in stock container or portfolio */}
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            props.stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            props.stock.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
