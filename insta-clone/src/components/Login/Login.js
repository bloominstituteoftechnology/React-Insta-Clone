import React from 'react'



class Login extends React.Component {

    render() {

        return (
            <form action="">
            <label>Username</label>
            <input type="text" />
            <label >Password</label>
            <input type="password" />
            <button className= 'login-submit'>Login</button>
            </form>
        )
    }

}


export default Login