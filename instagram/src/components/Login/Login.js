import React, {Component} from 'react';


class Login extends Component {
    constructor(){
        super();
        this.state={
            loginInput: ''
        }
    }

    loggingIn = event => {
        event.preventDefault();
        if(this.state.loginInput){
          localStorage.setItem('username', this.state.loginInput);
          this.setState({
            loginInput: ''
          });
        }
        
      }
    
      handleLoginInput = event => {
        this.setState({
          loginInput: event.target.value
        });
      }

    render() {
        return (
            <form>
                <input value={this.state.loginInput} onChange={this.handleLoginInput}></input>
                <input type= 'text' placeholder='Enter Password'></input>
                <button onClick={this.loggingIn}>Login</button>
            </form>
        );
    }
}


export default Login;