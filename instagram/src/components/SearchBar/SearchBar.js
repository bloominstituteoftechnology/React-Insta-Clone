import React from 'react'; 
import './SearchBar.css'; 
import PropTypes from 'prop-types'; 


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {}; 
    }

    render () {

        return (
        <div>
          <i className="fab fa-instagram">   &#124;</i> <span>Instagram</span> <input placeholder="search"/> <i className="far fa-compass"></i><i className="far fa-heart"></i> <i className="far fa-user"></i>
          <hr/>
        </div>
        );
    }
}

export default SearchBar; 