import React from "react";
import './SearchBar.css';

const SearchBar = props => {
    console.log(props);
    return (
        <div className = "SearchBar">
            <div className="SearchBar__LeftSide">
                <img className='Icon InstaLogo' src ="https://image.flaticon.com/icons/svg/733/733614.svg" alt="Something's missing!" />
                <h1 className='instagramText'>Instagram</h1>
            </div>
            <div className="SearchBar__Center">
                <form>
                    <input type="text" placeholder="SEARCH" />
                </form>
            </div>
            <div className="SearchBar__RightSide">
                <img className='Icon Compass' src="https://image.flaticon.com/icons/svg/109/109680.svg" alt="Something's missing!"></img>
                <img className='Icon Heart' src="https://image.flaticon.com/icons/svg/149/149217.svg" alt="Something's missing!"></img>
                <img className='Icon Avatar' src="https://image.flaticon.com/icons/svg/126/126486.svg" alt="Something's missing!"></img>
            </div>
        </div>
    )
};

export default SearchBar;