import React from 'react';

const SearchBar = () => {
    return (
        <div className="headerBar">
            <div className="leftIcons">
                <img className="firstImage image" src="http:" />
                <img className="image"src="http:" />
            </div>
            <div className="searchDiv">
                <input className="inputField" 
                type="text" 
                placeholder="Search" 
                name="inputField" 
                //value={this.state.search}
            />
            </div>
            <div className="rightIcons">
            <img className="image" src="http:" />
            <img className="image" src="http:" />
            <img className="image" src="http:" />
            </div>
        </div>
    )
}

export default SearchBar;