import React, {Component} from 'react';


class Login extends Component{
    constructor(props) {
        super(props); 
        this.state = {
            user: '',
            password: ''
        }
    }

    inputHandle = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitHandle = (event) =>{
        const user = this.state.user;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render(){
        return(
            <div>
                <form>
                    <input type='text' placeholder='Username' name='user' value={this.state.user} onChange={this.inputHandle} />
                    <input type='text' placeholder='Password' name='password' value={this.state.password} onChange={this.inputHandle} />
                    <button onClick={this.submitHandle}>Login</button>
                </form>

            </div>

        )
    }
}

export default Login;