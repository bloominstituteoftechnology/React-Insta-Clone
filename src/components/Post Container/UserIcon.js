import React from 'react';
import "./postcontainer.css";

const UserIcon = props =>{
    return(
        <div>
            <img className="userThumbNail" src={props.icons.thumbnailUrl} alt="User Icon"></img>
        </div>
    )
}

export default UserIcon