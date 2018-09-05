import React from 'react';
import PropTypes from 'prop-types';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleLogin = (event) => {
        event.preventDefault();
        
    }

    render() {
        return (
            <form>
                <input name='user' type='text'></input>
                <input name='pw' type='password'></input>
                <button>Login</button>
            </form>
        );
    }
}

Login.propTypes = {

}

export default Login;
