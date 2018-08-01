import React from 'react';

const Login = (props) =>{
     
        return (
            <div className='Login Container'>
                LOGIN:
                <form onSubmit={props.methods[0]}>
                    UserName: <input onChange={props.methods[1]} name='userName'type='text' />
                    Password: <input name='password' type='text' />
                    <button>Login </button>
                </form>
            </div>
        );
    
}

export default Login;