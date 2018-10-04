import React from "react";
import "./postcontainer.css";

const UserHeaderInfo = props => {
    return(
        <div className={'userNameData'}>
            {props.usernamesdata.username}
            
        </div>
    )
};


export default UserHeaderInfo