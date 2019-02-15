import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    
    inputHandler = event => {
        this.setState({[event.target.name]:event.target.value})
    };
    
    handleLoginSubmit = event => {
        const user = this.state.username;
        localStorage.setItem('user', user)
        window.location.reload();
    };

    render() {
        return (
            <div className='login=container'>
                <h1>Welcome to Instagram. Please enter your login info</h1>
                <form>
                    <label>Username:</label>
                    <input onChange={this.inputHandler} type='text' name='username' placeholder='username' value={this.state.username}/>
                    <label>Password:</label>
                    <input onChange={this.inputHandler} type='text' name='password' placeholder='password' value={this.state.password}/>
                    <button type='submit' onClick={this.handleLoginSubmit}>Submit</button>
                </form>
            </div>
        )
    }

}

export default Login