import React from 'react';


const Login = props => {
    return( 
        <div>
                <p>UserName :</p><input id='txtUserName' value={props.txtUserName} onChange={props.userNameChange}></input>
                <p>Password :</p><input id='txtPassword' value={props.txtPassword} onChange={props.passwordChange}></input>
                <br/>
                <button onClick={props.login}>Log In</button>
        </div>
    )
}


export default Login

