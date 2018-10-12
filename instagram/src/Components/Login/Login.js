import React from 'react'; 

class Login extends React.Component{
    constructor(props){
    super(props); 
    this.state = {
      username: '',
      password: ''
    }
    }

    handleInputChange = event => {
        this.setState({ 
        [event.target.name]: event.target.value    
        })
    }

    handleLoginSubmit = event => {
        const user = this.state.username; 
        localStorage.setItem('user', user); 
        window.location.reload(); 
    }

  render() {
      return (
          <form className="login-form">
            <h3>Instagram</h3> 
            <div>Login Here</div> 
            <div>
              <input
                  type="text"
                  placeholder="User Name"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
               />
            </div> 
            <div>
              <input
                 type="password"
                 placeholder="Password"
                 name="password"
                 value={this.state.password}
                 onChange={this.handleInputChange}
               />
               <br />
               <button onClick={this.handleLoginSubmit}>
                 Log In
               </button>
            </div>
          </form> 
      )
  }
}

export default Login