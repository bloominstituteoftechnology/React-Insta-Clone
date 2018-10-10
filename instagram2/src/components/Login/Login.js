import React from 'react';
//css

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }


    render() {
        return (
            <div className="log-in-container">
                <input className="log-in"
                    type="text"
                    placeholder="username"
                />
                <input className="password"
                    type="text"
                    placeholder="username"
                />
                <button className="log-in-button">Log In</button>
            </div>
        )
    }
}
export default Login;
