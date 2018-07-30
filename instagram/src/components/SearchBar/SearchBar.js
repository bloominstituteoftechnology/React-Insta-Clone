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
          <i class="fab fa-instagram">   &#124;</i> <span>Instagram</span> <input placeholder="search"/> <i class="far fa-heart"></i> <i class="far fa-user"></i>
          <hr/>
        </div>
        );
    }
}

export default SearchBar; 