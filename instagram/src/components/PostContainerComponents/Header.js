import React from 'react';
import './Post.css';

const Header=(props)=> {
    return (
        <div className='header-container'>
           <div className='thumbnail'>
            <img className='thumbnail-img' src={props.thumbnail}/>
           </div>
           <div className='username'>
            {props.username}
           </div>
        </div>
    );
};

export default Header;