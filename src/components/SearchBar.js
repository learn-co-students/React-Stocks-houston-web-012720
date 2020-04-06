import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortAlphabetically} onChange={e => props.sortStocks(e)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortByPrice} onChange={e => props.sortStocks(e)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e)=>{props.filterStocks(e)}}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
