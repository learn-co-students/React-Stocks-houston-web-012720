import React , {Component} from 'react';

class SearchBar extends Component{

  constructor(){
    super()
    this.state = {
      alpha_checked: false,
      price_checked: false
    }
  }

  sortPick = (e) => {
    let value = e.target.value
    if(value === "Alphabetically"){
      this.setState({alpha_checked: true, price_checked: false})
    }else{
      this.setState({alpha_checked: false, price_checked: true})
    }
    this.props.handleSort(value)
  }

  handleChange = (e) => {
    this.props.handleFilter(e.target.value)
  }

  render(){
    return (
      <div>
        <strong>Sort by:</strong>
          <input type="radio" value="Alphabetically" checked={this.state.alpha_checked} onChange={(e) => this.sortPick(e)}/>
          <label htmlFor="Alphabetically">Alphabetically</label>
          <input type="radio" value="Price" checked={this.state.price_checked} onChange={(e) => this.sortPick(e)}/>
          <label htmlFor="Price">Price</label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={(e) => this.handleChange(e)}>
          <option value="All">All Stock</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>


      </div>
    )
  }
}


export default SearchBar;
