import React from 'react';
import SearchForm from './SearchForm';
import IGB from '../../../../assets/igBanner/instagram-1-black-and-white-logo.png';
import logo from './logo.svg'

// import './SearchBar.css';




function SearchBar(props) {
    return (
        <React.Fragment>
            <div className="SearchFlex" >
                <i className="fab fa-instagram"></i>
                <a><img alt="IG Banner" src={IGB}  className="" ></img></a>
            </div>
            <div>
                <ul><li>Hello</li></ul>
                <SearchForm />
            </div>
            <div>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>


        </React.Fragment>
    );
}

export default SearchBar;