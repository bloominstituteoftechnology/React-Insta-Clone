import React, {Component} from 'react'
import './SearchBar.css'


class SearchBar extends Component{

    render(){
        return (
            <div className='Searchbar'>
                <input placeholder='Search'/>
            </div>
        )
    }

}

export default SearchBar