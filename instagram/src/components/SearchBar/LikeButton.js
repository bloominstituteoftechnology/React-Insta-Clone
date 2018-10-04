import React from 'react';
import LikeButt from '../../img/like.png';
import './searchbar.css';

const LikeButton = () => {
    return (
        <div>
            <img className="Like-Button" src= {LikeButt} />
        </div>
    )
}

export default LikeButton;