import React, {Component} from 'react';
import './SearchBar.css'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
    }

    changeHandler = (event) => {
        this.setState({
            searchQuery: event.target.value
        }, () => {this.props.onSearch(this.state.searchQuery)})
    }

    render() {
        return(
            <div className="header">
                <div className="logo">
                    <i className="fab fa-instagram"></i>
                    <span>|</span>
                    <img src="instagram_logo.svg" />
                </div>
                
                <input className="searchbar" type="text" placeholder="Search" value={this.state.searchQuery} onChange={this.changeHandler}></input>

                <div className="login">
                    login stuff
                </div>
            </div>
            
        );
    }
} 

export default SearchBar;