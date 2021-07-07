import React from 'react';

function UserName(props) {
    return <div className="userInfo">
        <img className="thumbnailPic" height='30' width= '30' src={props.thumbnail} alt="thumbnail" />
        <span className="userName">{props.name} </span> 
    </div>
}

export default UserName;