import React from 'react';

class SearchBar extends React.Component{
    render(){
        return (
            <div>
                <span><i className="fas fa-camera-retro"></i>Exchange-O-Gram</span>
                <input placeholder="Search"></input>
                <span><i className="far fa-heart"></i><i className="far fa-user"></i></span>
            </div>
        )
    }
}

export default SearchBar;