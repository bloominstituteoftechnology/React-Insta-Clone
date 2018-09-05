import React, { Component } from 'react';
import './SearchBar.css'

// Handles and displays the user's search
class SearchInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
          inputValue: '',
          index: props.ind
      };
    }
  
    // Sends back a fuction that handles the search based on the input
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.hdlSearch(this.state.inputValue);
    }

    // Update the input value's based on the user's inputs
    updateInputValue(e) {
        this.setState({
          inputValue: e.target.value
        });
        this.handleSubmit(e);
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="search-inputbar" type="input" value={this.state.inputValue} onChange={e => this.updateInputValue(e)} name="searchInput" placeholder="Search" />
            </form>
        )
    }
}

export default SearchInput;