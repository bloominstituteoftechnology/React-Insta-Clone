import React from 'react';




const LogIn = props => {
    return(
        <form onSubmit={props.addNewLogin}>
        <input onChange={props.handleUsername}  placeholder="Username" type="text"></input>
        <input  onChange={props.handlePassword}  placeholder="Password" type="text"></input>
        <button>Log-In</button>
        </form>
        
    );


};

export default LogIn;
