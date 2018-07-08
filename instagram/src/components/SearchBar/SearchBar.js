import React from 'react'

import './SearchBar.css'

export const SearchBar = () => {
    return (
        <div className="Header">

            <div className="Header__Instagram">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Instagram_simple_icon.svg"
                    width="20"
                    alt="instagram-logo"
                />
                <p className="Header__P"> | </p>
                <img 
                    src="http://www.androidguys.com/wp-content/uploads/2015/04/insta.png"
                    width="100"
                    height="30"
                    alt="instagram"
                />
            </div>

            <div className="Header__SearchBar">
                <input
                    className="SearchBar__Search"
                    placeholder="Search"
                />
            </div>

            <div className="Header__Icons">
                <img 
                    src="https://image.freepik.com/free-icon/safari-compass-logo-ios-7-interface-symbol_318-36575.jpg"
                    width="30"
                    height="20"
                    alt="compass"
                />
                <img 
                    src="https://imageog.flaticon.com/icons/png/512/14/14949.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                    width="30"
                    height="20"
                    alt="heart"
                />
                <img 
                    src="https://d30y9cdsu7xlg0.cloudfront.net/png/137578-200.png"
                    width="30"
                    height="20"
                    alt="person"
                />
            </div>
        </div>
    )
}