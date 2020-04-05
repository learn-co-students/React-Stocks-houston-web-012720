import React from 'react'

const Stock = (props) => (
 
  <div>
    <div className="card" onClick= {()=> props.clicked(props.stock)} >
    {/* {()=>props.a.includes(props.stock)?props.deletefromport(props.stock):props.addToport(props.stock)} > */}
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            props.stock.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
