import React from 'react';
import './SearchBar.css';
import { grey } from 'ansi-colors';

const inlinestyleforsearchbar = {
    background: grey,
    color: 'black',
    height: '125px',
    width: '1024px',
    border: '1px solid black',
    
}

class SearchBar extends React.Component {
    constructor() {
        super();
        this.setState = {
            Search: []
                
        };
    }  
    
    render () {
        return (
        <div className="SearchBar" style={inlinestyleforsearchbar} border={'1px solid black'} display={'flex'}>
        <a className="fab fa-instagram" href="https://www.instagram.com" >Instagram</a>
        
        <input autoComplete="true" type="text" required='true' name="search"></input>
        <a className="fab fa-heart" alt="heart icon">heart</a>
        </div>
    )};

}; // End Class  

  
export default SearchBar;  