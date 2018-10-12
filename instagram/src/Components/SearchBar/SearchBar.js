import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
    super(); 
      this.state = {
          search: ''
      }
    }

    inputHandler = event => {
      this.setState({
        search: event.target.value
      })
      this.props.searchHandler(event.target.value);
    };

  render(){
  return (
    <div className="searchBar">
      <div className="logo">
        <i id="icon-logo" class="fab fa-instagram"></i>
        <p className="split"> | </p>
        <h1>Instagram</h1> 
      </div> 
      <form>
        <input
        value={this.state.search}
        onChange={this.inputHandler}
        placeholder = "search">
        </input> 
      </form> 
      <div> 
        <i id="icon" class="far fa-compass"></i>
        <i id="icon"class="far fa-heart"></i>
        <i id="icon"class="fas fa-user-alt"></i>
      </div>  
    </div>
  )
 }
}

export default SearchBar; 