import React from 'react';


const Login = props => {
    return( 
        <div>
                <p>UserName :</p><input id='txtUserName'></input>
                <p>Password :</p><input id='txtPassword'></input>
                <button>Log In</button>
        </div>
    )
}


export default Login

