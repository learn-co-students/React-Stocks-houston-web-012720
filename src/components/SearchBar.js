import React from 'react';

export default class SearchBar extends React.Component {

  checked = () => this.props.sortAlphabetically?true:false

  render() {
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.checked()} onChange={this.props.changeSorting}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={!this.checked()} onChange={this.props.changeSorting}/>
          Price
        </label>
        <br/>
        <label>
          <strong>Filter:</strong>
          <select onChange={(e) => this.props.changeFilter(e.target.value)}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
            <option value="All">All</option>
          </select>
        </label>
      </div>
    );
  }
}




