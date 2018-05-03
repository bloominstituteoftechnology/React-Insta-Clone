import React from 'react';
import './Header.css';

const Header = props => {

    return(
        <div>
            <img className="thumbnail" src={props.dummyData.thumbnailUrl} alt="logo thumbnail" />
            {props.dummyData.username}
        </div>
    )
}

export default Header;