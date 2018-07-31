import React from 'react'; 
import './SearchBar.css'; 
import PropTypes from 'prop-types'; 
import SimpleStorage from "react-simple-storage"; 

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {}; 
    }

    render () {
        
        return (
        <div className = "searchBar">
          <SimpleStorage parent={this} />
          <div className ="leftSideSearchBar"><i className="fab fa-instagram"></i> <span className="verticalLine">&#124;</span><span className ="logoTitle">Instagram</span> </div>
          <div className = "topSearch">
          <input className = "searchInput" onChange = {this.props.onChange} value ={this.props.value} placeholder="&#128269; Search"/>
          </div>
          <div className = "rightSideSearchBar">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i> 
            <i className="far fa-user"></i>
          </div>
          {/* <hr className ="hrLine"/> */}
        
        </div>
        );
    }
}



SearchBar.propTypes = {
    onChange: PropTypes.func, 
    value: PropTypes.string
}

export default SearchBar; 