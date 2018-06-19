import React from 'react';
import './SearchBar.css';


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
            {/* <div className="SearchItems"> */}
              <div className="Insta-logo-block">
                 <img className="Insta-logo" src="http://www.freelogovectors.net/wp-content/uploads/2016/12/instagram-logo1-375x375.png" alt="insta logo"/>
                 <img className="Insta-name" src="http://www.freelogovectors.net/wp-content/uploads/2016/12/InstagramLogo-768x217.png" alt="insta name"/>
              </div>
              <div className="Search-input">
                <input
                  placeholder="Search"
                /> 
              </div>
              <div className="Search-icons">
                <div className="Search-icon"><i class="far fa-compass"></i></div>
                <div className="Search-icon"><i class="far fa-heart Search-icon"></i></div>  
                <div className="Search-icon"><i class="far fa-user Search-icon"></i></div>
              </div>
              {/* </div> */}
            </div>
       );
    }   
}

export default SearchBar