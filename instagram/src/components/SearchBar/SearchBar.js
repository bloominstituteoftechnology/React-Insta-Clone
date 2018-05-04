import React from 'react';
import './SearchBar.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class SearchBar extends React.Component {
    constructor() {
      super();
    }


    render() {
      return (
        <div className="wrapper">
          <div className="search-section1">
            <div className="main-icon">
              &part;
            </div>
            <div className="main-logo">
              <em>Instagram</em>
            </div>
          </div>
          <div className="main-search">
            <Input onChange={(e) => this.props.search(e)}
  
            className="search-input"
            type="text"
            placeholder="search"
            />
          </div>
          <div className="sub-icon">
            <span>&spades; </span>
            <span>&clubs; </span>
            <span>&diams;</span>
          </div>
        </div>
  
      )
    }
  
  }
  
export default SearchBar;