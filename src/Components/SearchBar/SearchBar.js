import React, { Component } from 'react';
import './SearchBar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() { 
        return (
            <form className="searchBar">
                <div className="div">
                    <label for="search">
                        <FontAwesomeIcon icon={faInstagram} /> | Instagram 
                    </label>
                </div>

                <div className="div">
                <input 
                    name="search"
                    className="searchbar"
                    type="text"
                    placeholder="&#128269; Search"
                />
                </div>

                <div>
                    <span><FontAwesomeIcon icon={faCompass} />&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faHeart} />&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faUser} /></span>
                </div>
            </form>
        );
    }
}
 
export default SearchBar;