import React from 'react';
import './SearchBar.css';


class SearchLogo extends React.Component {

    render () {
        return (
            <div className={"logoContainer"}>
                <img className={"instaLogo"} src='https://image.flaticon.com/icons/svg/1077/1077042.svg' alt='instagram logo'/>
                <p className={"insta"}>Instagram</p>
            </div>
        )
    }
}


export default SearchLogo;