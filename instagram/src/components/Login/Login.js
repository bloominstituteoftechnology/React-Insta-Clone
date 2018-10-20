import React from 'react';

const Login=(props)=>{
    return(
        <div>
        <form onSubmit={props.onSubmit}>
            <input type="text" placeholder="Username" onChange={props.onUserTyping} value={props.changingVal}/>
            <input type="password" placeholder="password"/>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}
export default Login