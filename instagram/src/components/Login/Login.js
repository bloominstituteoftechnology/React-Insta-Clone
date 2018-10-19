import React from 'react';

const Login=(props)=>{
    return(
        <form onSubmit={props.onSubmit}>
            <input type="text" onChange={props.onChange} />
            <input type="password"/>
            <button type="submit"/>
        </form>
    )
}
export default Login