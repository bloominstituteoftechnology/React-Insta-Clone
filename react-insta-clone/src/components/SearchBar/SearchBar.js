import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    handleChange = e => {
        this.props.filterPosts(e.target.value);
    };
    render() {
        return (
            <div className="search-bar">
                <div className="header-icon">
                    <i className="fab fa-instagram"/>
                </div>
                <img className="header-logo" src="https://fontmeme.com/images/instagram-new-logo.png" alt="instagram logo"></img>
                <input type='text' placeholder='Search' onChange={this.handleChange}></input>
                <div className="icons">
                    <i className="far fa-compass"/>
                    <i className="far fa-heart"/>
                    <i className="far fa-user"/>
                </div>
            </div>         
            
        )
    }
}

export default SearchBar;