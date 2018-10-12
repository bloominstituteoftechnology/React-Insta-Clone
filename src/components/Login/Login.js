import React from 'react';

 const LoginPage =   (props) =>  {
    return(
        <form onSubmit={event   =>  props.login(event)}>
            <input placeholder="username..." onChange={props.inputChangeHandler}></input>
            <input placeholder="password..." type="password"></input>
            <button type="submit">Login</button>
        </form>
    )
}
 export default LoginPage;