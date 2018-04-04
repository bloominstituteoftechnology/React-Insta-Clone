import React from 'react'
import './SearchBar.css'
class SearchBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='SearchBar'>
            <h3>Instagram</h3>
            <form>
            <input type="text" placeholder='Search'/>
          </form> 
            </div>
        );
    }
}
export default SearchBar;