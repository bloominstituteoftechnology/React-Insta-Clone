import React from 'react';
import user from './user.png';
import compass from './compass.png';
import instalogo from './instalogo.jpg';
import camera from './cameralogo.svg';

const SearchBar = () => {
    return (
        <div className="headerBar">
            <div className="leftIcons">
                <img className="firstImage image" src={camera} />
                <img className="image"src={instalogo} />
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
            <img className="image" src={compass} />
            <img className="image" src={user} />
            </div>
        </div>
    )
}

export default SearchBar;