import React from 'react';
import './Header.css';

const Header = props => {

    return(
        <div className='header'>
            <img className="thumbnail" src={props.dummyData.thumbnailUrl} alt="logo thumbnail" />
            <span className="username">{props.dummyData.username}</span>
        </div>
    )
}

export default Header;