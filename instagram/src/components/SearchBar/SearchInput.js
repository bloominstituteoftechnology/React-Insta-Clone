import React, { Component } from 'react';
import './SearchBar.css'

class SearchInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
          inputValue: '',
          index: props.ind
      };
    }
  
    // Set the dummyData when the component mounts
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.hdlSearch(this.state.inputValue);
    }

    updateInputValue(e) {
        this.setState({
          inputValue: e.target.value
        });
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