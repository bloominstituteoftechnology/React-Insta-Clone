import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component{
    constructor(){
        super();
        this.state = {
            searchText: ''
        }
    }

handleSearchInput = (event) => {
    event.preventDefault();
    this.setState({ searchText: event.target.value });
};

render() {

    return(
        <div>
        
        <form>
            <input className="Nav__SearchText" type="text" onChange={this.handleSearchInput} placeholder="🔍 Search" value={this.state.searchText} />
            </form>
        
        </div>
    )
}

}

export {SearchBar};