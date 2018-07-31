import React from 'react'; 
import './SearchBar.css'; 
// import PropTypes from 'prop-types'; 


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {}; 
    }

    render () {
        console.log(this.props)
        return (
        <div className = "searchBar">
          
          <div className ="leftSideSearchBar"><i className="fab fa-instagram"></i> <span className="verticalLine">&#124;</span><span className ="logoTitle">Instagram</span> </div>
          <div className = "topSearch">
          {/* &#128269    */}
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

export default SearchBar; 