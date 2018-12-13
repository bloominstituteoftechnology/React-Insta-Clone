import React from 'react';
import './UserInfo.css'

const UserInfo = props => {
    return ( 
        <div className="user-info">
            <img src={props.thumbnailUrl} alt="user thumbnail"/>
            <p className="username">{props.username }</p>
        </div>
    );
}
 
export default UserInfo;