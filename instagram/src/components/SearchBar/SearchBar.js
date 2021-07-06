import React, { Component } from 'react';



class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        };
    }

    handleSubmit = () => {
        this.setState({ userInput: '' });
    }

    handleSearchInput = () => {
        this.setState({ userInput: this.target.value });
    }

    render() {
        return (
            <div>
                <h2>Search Bar Here</h2>
                <input type ="text" placeholder="Search" value={this.state.userInput} onChange={this.handleSearchInput} />
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }

}

export default SearchBar;