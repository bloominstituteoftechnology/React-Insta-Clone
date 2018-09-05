import React from 'react';

const Login = prop => {
    <div>
    <form onSubmit={props.handleSubmit}>
        <input 
        type="text"
        value={props.username}
        placeholder="Enter username"
        onChange={props.usernameHandler}
        />
        <input
        type="text"
        value={props.password}
        placeholder="Enter password"
        onChange={props.passwordHandler}
        />
        <button onClick={props.handleSubmit}>Login</button>
    </form>


    </div>
}