import React from 'react';

const LogIn = (props)=> {
    return(
        <div className="logIn">
            <form>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="password" />
            </form>
        </div>
    )
}

export default LogIn;