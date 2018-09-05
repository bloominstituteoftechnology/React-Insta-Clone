import React from 'react';

function Login(props) {
    return(
        <div>
            <form>
                <input
                    type = "text"
                    name = "username"
                    placeholder = "username"
                />
                <input
                    type = "text"
                    name = "password"
                    placeholder = "password"
                />
            </form>

            <button onSubmit={props.logon} onChange={props.handleChanging}>
                Login
            </button>
        </div>
    )
}

export default Login;