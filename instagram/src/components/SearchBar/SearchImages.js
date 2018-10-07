import React, { Component } from 'react';

class SearchImages extends Component {
    render() {
        return (
            <div className='image-container'>
                <div className='image-icon'>
                    <img src='https://image.flaticon.com/icons/svg/77/77521.svg' alt='explore'/>
                    <img src='https://image.flaticon.com/icons/svg/149/149217.svg' alt='likes'/>
                    <img src='https://image.flaticon.com/icons/svg/126/126486.svg' alt='avatar'/> 
                </div>
            </div>
        );
    }
}

export default SearchImages;
