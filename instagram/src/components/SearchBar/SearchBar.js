import React from 'react';
import './SearchBar.css';

const SearchBar = props =>{
    return(
        <div>
            <div className="searchLogo">
                <div>
                    <span>icon</span>
                    <div>|</div>
                    <span>instagram</span>
                </div>
                <div>
                    <form>
                        <input value="search" />
                    </form>
                </div>
                <div>
                    <span>explore</span>
                    <span>heart</span>
                    <span>profile</span>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;