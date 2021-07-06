import React from 'react';
import LoginForm from './LoginForm';


class Login extends React.Component {
    constructor(props) {
        console.log("constructor")
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }


    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    
    }

    // handleLogin = (event) => {
    //     this.setState({ username: event.target.value})
    //     }
     

    login = ()=> {
        const username= this.state.username;
        localStorage.setItem('username', username)
        this.props.changeLogin();
    };
     
render() {
    return (
        <div>
            <h1>Login</h1>
            <div>
             <LoginForm username={this.state.username} handleChange={this.handleChange} handleLogin={this.handleLogin} login={this.login}/>
            </div>
            
        </div>
        
    )
}

}
    


export default Login;
