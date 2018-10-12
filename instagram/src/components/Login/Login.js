import React from 'react';
import {Button} from 'reactstrap'
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
        }
    }
    login = () => {
        localStorage.setItem('Username', this.state.username);
        window.location.reload()
    }
    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        }

        )
    }
    
    render() {
        return (
            <div>
                <form className="login">
                    <input onChange={this.usernameHandler} type="text" placeholder=" Username" />
                    <input type="text" placeholder=" Password" />
                </form>
                <button onClick={this.login} >Login</button>
            </div>
        );
    }
}

export default Login 