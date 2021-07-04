import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super();
        this.state ={

        }
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="username" onChange={this.props.login} />
                    <p>Username: Brandon</p>
                    <input type="text" placeholder="password" onChange={this.props.password} />
                    <p>Password: qwerty</p>
                    <input type="submit" value="submit" onClick={this.props.submit} />

                </form>
            </div>
        )
    }
};

export default Login;