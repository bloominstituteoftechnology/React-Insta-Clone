import React from 'react'; 
import './Login.css'; 

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
            <h3 className="login-header">Instagram</h3> 
            <div className="login-here">Login Here</div> 
            <div>
              <input
                  className="input-1"
                  type="text"
                  placeholder="User Name"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
               />
            </div> 
            <div>
              <input
                 className="input-2"
                 type="password"
                 placeholder="Password"
                 name="password"
                 value={this.state.password}
                 onChange={this.handleInputChange}
               />
               <br/>
               <div className="button"> 
               
                 <button onClick={this.handleLoginSubmit}> Log In </button>
               </div> 
            </div>
          </form> 
      )
  }
}

export default Login