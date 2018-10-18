import React from 'react';
import './searchBar.css';
import instaLogo from '../../Images/insta_logo.png';
import instaIcon from '../../Images/insta_icon.png';


class SearchBar extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        dummyData: props.dummyData, 
        placeholder: 'Search',
             
    }

    }
        
    render () {
        return (
            <div>
                <div>
                    <img className = 'instaIcon' src = {instaIcon} />
                    <img className = 'instaLogo' src = {instaLogo} />
                </div>
                <form className = 'searchBar'>
                <input onKeyDown={this.props.search} type="text" placeholder="Search" />
                </form>
            </div>

        )
      
    
    }
    
}
 
export default SearchBar;