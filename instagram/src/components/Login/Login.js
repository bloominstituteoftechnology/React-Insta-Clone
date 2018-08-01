import React from 'react'

function Login (props){
    const f = props.onChangeFunction
    return (
        <form>
            <input type="text" placeholder="Enter your userName" onChange={f.userName}/>
            <input type="passweord" placeholder="Enter your password" onChange={f.password}/>
            <button onClick={f.loginUser}>Login</button>
        </form>
    )
}

export default Login 