import React, { Component } from 'react';
import './SearchBar.css';

const SearchBarStyle = {
	width: '300px',
	zIndex: '0',
	marginLeft: 'auto',
	marginRight: '0'
};

class SearchBar extends React.Component{
    
  constructor() {
		super();
		this.state = { text: ''};
		this.inputSearch = this.inputSearch.bind(this);
  }
  
  inputSearch(event) {
		this.setState({
			text: event
		});
	}
  
  render(){
        return (
           <div className="SearchBar">
               <div className="Insta-logo-block">
                 <img className="Insta-logo" src="http://www.freelogovectors.net/wp-content/uploads/2016/12/instagram-logo1-375x375.png"/>
                 <img className="Insta-name" src="http://www.freelogovectors.net/wp-content/uploads/2016/12/InstagramLogo-768x217.png"/>
                 <input
                    style={SearchBarStyle}
                    type="text"
                    // this needs to be different than the function on app.js (clickAddToDo does as well)
                    onChange={this.inputSearch} 
                    placeholder="Search"
                    name="search"
                    value={this.state.text}
                  /> <div>
               </div>
           </div>
        </div>
       );
    }   
}

export default SearchBar