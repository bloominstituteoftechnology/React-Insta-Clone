import React from 'react';





class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      }
    }
    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleLoginSubmit = e => {
        localStorage.setItem('user', this.state.username);
    }

    render(){
        return(

            <form className="loginForm">
                <h2>Welcome To React-Instagram-Clone</h2>
        
                <input type="text" name="username"  placeholder="Username" 
                onChange={this.handleInputChange}
                value={this.state.username}/>
        
                <input type="password"  name="password" placeholder="Password" 
                onChange={this.handleInputChange}
                value={this.state.password}/>
            
                <input type="submit" 
                placeholder="Login"
                onClick={this.handleLoginSubmit}/>

        </form>
            
        )
    }
}

export default Login;
