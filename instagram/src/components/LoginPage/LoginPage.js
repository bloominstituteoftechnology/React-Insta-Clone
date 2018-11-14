import React from 'react'

const LoginPage = props =>{
        return(
            <form>
                <p>Login:</p>
                <input 
                type ="text"
                value ={props.user} 
                onChange ={props.userHandler}/>
                <p>Password:</p>
                <input 
                type ="password"
                value ={props.pass} 
                onChange ={props.passHandler}/>
            <button onClick = {props.submitHandler}>submit</button>
            </form>
        )
}

export default LoginPage