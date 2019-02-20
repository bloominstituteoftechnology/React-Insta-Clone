import React from 'react';

let username = "";

let password = "";

const getUser = (event)=>{

  username = event.target.value;

}

const getPwd = (event) =>{

  password = event.target.value;

}

const login = () =>{

  localStorage.setItem("username", username);

  localStorage.setItem("password", password);

}

const Login =() =>{

  return(

    <div className = "login">

      <form onSubmit = {login}>

        <input type = "text" placeholder = "username" onChange = {(e)=>getUser(e)}/>

        <input type = "text" placeholder = "password"  onChange = {(e)=>getPwd(e)}/>

        <input type = "submit" value = "submit" />

      </form>

    </div>

);

}

export default Login;
