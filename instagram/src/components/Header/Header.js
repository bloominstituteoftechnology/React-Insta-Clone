import React from 'react';
import './Header.css';

const Header = props => {
    return (
        <div>
            {props.dummyData.map(headerData => {
                return(
                    <div>
                        <img className="thumbnail" src={headerData.thumbnailUrl} />
                        {headerData.username}
                    </div>
                )
            })}
        </div>
    )
}

export default Header;