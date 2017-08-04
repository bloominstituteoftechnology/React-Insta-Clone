import React, { Component } from 'react';
import './SearchBar.css';

 const SearchBar = (props) =>  {
        return (
            <div className="Header">
              <div className="Left">
                <div className="Logo"><i className="fa fa-instagram"></i></div>
                <div className="Branding">Instagram</div>
              </div>
              <div className="Middle">
                <input type='text'value={props.search} onChange={props.handleSearch} />
              </div>
              <div className="Right">
                <ul>
                  <li><i className="fa fa-chain"></i></li>
                  <li><i className="fa fa-heart-o"></i></li>
                  <li><i className="fa fa-user-o"></i></li>
                </ul>
              </div>
            </div>
        );
};

export default SearchBar;
