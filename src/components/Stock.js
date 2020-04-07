import React from 'react'

const Stock = (props) => {
  return (
    <div>
      {/* <div className="card" onClick={(stock, panel) => props.toggleTracking(props.stock, props.panel)}> */}
      <div className="card" onClick={() => props.toggleTracking(props.stock)}>
        <div className="card-body">
          <h5 className="card-title">{props.stock.name}</h5>
          <p className="card-text"> {`${props.stock.ticker}: ${props.stock.price}`}</p>
        </div>
      </div>


    </div>
  )
}

export default Stock
