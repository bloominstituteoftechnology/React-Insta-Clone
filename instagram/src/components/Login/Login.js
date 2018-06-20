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

    render() {
        return (
            <form className='login__form' onSubmit={e => {
                e.preventDefault();
            }}>
                <input type="text"
                    className='login__username'
                    name='username'
                    placeholder='username'
                    onChange={e => {
                        this.changeText(e);
                    }} />

                <input type="text"
                    className='login__password'
                    name='password'
                    placeholder='password'
                    onChange={e => {
                        this.changeText(e);
                    }} />
                <button className='login__submit' onClick={e => {

                }}>Submit</button>
            </form>
        );
    }

}

export default Login;