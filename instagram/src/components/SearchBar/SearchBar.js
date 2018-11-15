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
                    <div className="empty-div"></div>
                    <img src="instagram_logo.svg" alt="logo" />
                </div>
                
                <input className="searchbar" type="text" placeholder="Search" value={this.state.searchQuery} onChange={this.changeHandler}></input>

                <div className="login">
                    <img src="compass.svg" alt="compass" />
                    <img src="like.svg" alt="like" />
                    <img onClick={this.props.logOut} src="login.svg" alt="login" />
                </div>
            </div>
            
        );
    }
} 

export default SearchBar;