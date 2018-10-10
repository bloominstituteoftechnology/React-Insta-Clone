import React from 'react';
import './SearchBar.css';
import PropTypes from'prop-types';
class SearchBar extends React.Component{
    constructor(){
        super();
        this.state={
            searchInput:''
        };
    }

Submit=event=>{
    event.preventDefault();
    this.setState({
        searchInput:''
    });
}
Input=event=>{
    this.setState({searchInput: event.target.value});
}
    render(){ 
        return(
            <div className="search-bar">
                    
                <div className="logo">
                    <p>L</p>
                    <p>|</p>
                    <p>instagram</p>
                </div>
                <form >
                    <input className="search" placeholder="Search"value={this.state.searchInput}onChange={this.Input}/>
                </form>
                <div className="icons">
                    <ul>a</ul>
                    <ul>b</ul>
                    <ul>c</ul>
                </div>
                
            
            </div>
    )
    }
}
SearchBar.propTypes={
    searchInput: PropTypes.string,
}
export default SearchBar;