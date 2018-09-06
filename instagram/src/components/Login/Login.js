import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",              
        }
    }

    handleInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
  
      loginSumbit = e => {
        e.preventDefault();
        window.localStorage.setItem('username', this.state.username)
        window.localStorage.setItem('password', this.state.password)
        console.log('reload');
        window.location.reload()
      }

    render(){        
        return (        
        <form>
            <input 
                placeholder='username' 
                value={this.state.username} 
                name= 'username' 
                onChange={this.handleInput}
            />

            <input  
                placeholder='password'
                value={this.state.password}
                name= 'password'
                onChange={this.handleInput}
            />
            <button 
            onClick={this.loginSumbit} 
            type='button'>
            Login
            </button>
        </form>
        )   
    } 
}


export default Login;
