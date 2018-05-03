import React, { Component } from 'react';
import './SearchBar.css'
import logo from './Logo.svg';

class SearchBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="nandobar d-flex">
                <div className="asdf">
                    <i className="fab fa-instagram fa-3x"></i>
                    <span className="border-left"></span>
                    <img className="logo" src={logo} />
                </div>
                <div>
                    <input
                        className="search-bar rounded"
                        name="comment" // should be known as the state.value of the thing we update
                        // onChange={this.handleNewItem}
                        // value={this.state.comment} // should be bound to the state.value of thing we update
                        placeHolder="Search"
                    />
                </div>
                <div>
                    <i class="far fa-compass"></i>
                    <i class="far fa-heart"></i>
                    <i class="far fa-user"></i>
                </div>
            </div>
        );
    }
}

export default SearchBar;