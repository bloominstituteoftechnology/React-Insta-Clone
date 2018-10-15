import React from 'react';
import './searchBar.css';

const SearchBar = (props) => {
    return (
        <header>
            <div class='container'>{/*Instagram logo and Name*/}
            <img src='https://cdn.vectorlogosupply.com/logos/large/2x/instagram-glyph-1-png-transparent-logo.png'></img>
            <h1>Instagram</h1>
            </div>

            <form class='container'>{/*Search box*/}
                <input value={props.value} onChange={props.inputHandler}></input>
            </form>

            <div class='container'>{/*Exlore - Activity - Profile */}
                <img src='data:image/png;base64,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'></img>
                <img src='https://images.vexels.com/media/users/3/147092/isolated/preview/c35ccbb5fe122c777314c1849ee1ba50--cone-da-linha-do-cora--o-instagram-by-vexels.png'></img>
                <img src='https://images.vexels.com/media/users/3/147103/isolated/preview/e9bf9a44d83e00b1535324b0fda6e91a-instagram-profile-line-icon-by-vexels.png'></img>
            </div>

        </header>
    )
}

export default SearchBar;