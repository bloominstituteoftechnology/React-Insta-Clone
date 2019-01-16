import React from 'react';
import '../../App.css'
const LogOutMenu = props =>{
    
    return(
        <div className="logout-menu position-absolute w-25 bg-info">
            <h3>Welcome {props.username}</h3>
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}

export default LogOutMenu;