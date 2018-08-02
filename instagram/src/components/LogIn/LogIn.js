import React from "react";


class LogIn extends React.Component {
    constructor() {
        super();
        this.state = {
            username:''
        };
    }


    handleLogin = e => {
        localStorage.setItem('username', this.state.username)
        window.location.reload();
    };


    handleInput = e => {
        this.setState({ username: e.target.value })
    };


    render() {
        return (
            <div className='login'>
                <h1>IG Clone</h1>
                <form action="">
                    <input 
                        onChange={this.handleInput}
                        type='text'
                        placeholder='Username'
                        autoComplete='off' required/>
                    <input 
                        type='password'
                        placeholder='Password'
                        autoComplete='off'
                        />
                    <button onClick={this.handleLogin}>
                        LogIn   
                    </button> 
                </form>
            </div>
        );
    }
};


export default LogIn;