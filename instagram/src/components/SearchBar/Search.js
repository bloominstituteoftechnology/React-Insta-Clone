import React, { Component } from 'react';
import './searchbar.css';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            userinput: '',
            searchData: []
        }
    }

    searchHandler = (e) => {
        this.setState({
            userinput: e.target.value
        })
    }

    

    render() {
        return (
            <form onSubmit = {(e) => {this.state.filter(e)}}>
                <input type="text" 
                    placeholder = " Search... "  
                    value = {this.state.userinput}  
                    onChange = {this.searchHandler} />
            </form>
        )
    }
}


export default Search;