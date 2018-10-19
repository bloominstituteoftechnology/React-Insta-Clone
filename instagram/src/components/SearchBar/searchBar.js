import React from 'react';
import './searchBar.css';
import instaLogo from '../../Images/insta_logo.png';
import * as Icon from 'react-feather';


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
            <div className = 'searchBarSection'>
                <div className = 'leftIcons'>
                    <Icon.Instagram />
                    <img className = 'instaLogo' src = {instaLogo} />
                </div>
                <form >
                <input className = 'searchBar' 
                    onKeyDown={this.props.search} 
                    type="text" 
                    placeholder=  "Search" />
                </form>
                <div className= 'rightIcons'>
                    <Icon.Compass />
                    <Icon.Heart />
                    <Icon.User />
                </div>
            </div>

        )
      
    
    }
    
}
 
export default SearchBar;