import React from 'react';
import './search.css';
import LogOut from '../../Login/LogOut';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
        <div className="searchHeader">
            <img className="instaLogo" src="https://png.icons8.com/ios/1600/instagram-new.png" alt="instagram logo"/>
            <form> 
                <input className="searchBar" type="text" placeholder="search"></input>
            </form>
            <div className="searchButtons">
                <img src="https://cdn1.iconfinder.com/data/icons/superthick-app-ui/128/explore-compass-travel-512.png" alt="nav logo" />
                <img className="searchHeart" src="http://www.pngall.com/wp-content/uploads/2016/04/Instagram-Heart-Transparent.png" alt ="heart logo"/>
            </div>
            <LogOut />
        </div> 
        );
    }
}

export default Search;