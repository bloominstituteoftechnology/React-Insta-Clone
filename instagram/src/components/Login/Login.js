import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    changeText = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    startLogin = () => {
        sessionStorage.setItem('username', this.state.username);
        sessionStorage.setItem('password', this.state.password);
        window.location.reload(false);
    }
    render() {
        return (
            <form className='login__form' onSubmit={e => {
                e.preventDefault();
            }}>
                    {/* Username */}
                <input type="text"
                    className='login__username'
                    name='username'
                    placeholder='username'
                    onChange={e => {
                        this.changeText(e);
                    }} />
                    {/* Password */}
                <input type="text"
                    className='login__password'
                    name='password'
                    placeholder='password'
                    onChange={e => {
                        this.changeText(e);
                    }} />
                <button className='login__submit' onClick={this.startLogin}>Submit</button>
            </form>
        );
    }

}

export default Login;