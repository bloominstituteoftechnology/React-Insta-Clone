import React, {Component} from 'react';
import './login.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = { 
            usernameInput:"",
            passwordInput:""

         }
    }

    // componentDidMount() {
    //     let id = this.props.postId;
    //     if (localStorage.getItem(id)) {
    //         this.setState({
    //           comments: JSON.parse(localStorage.getItem(this.props.postId))
    //         });
    //       } else {
    //         this.setComments();
    //       }
    //     }


    // componentWillUnmount() {
    //     this.setComments();
    // }

    changeInput = event => 
    this.setState({
        usernameInput: event.target.value
    });

    passwordChange = event => 
    this.setState({
        passwordInput: event.target.value
    });

    loginSubmit = (event, i) => {
        event.preventDefault();
        const username = this.state.usernameInput;
        localStorage.setItem('user', username);
        const password = this.state.passwordInput;
        localStorage.setItem('pass', password);
        window.location.reload();
    }

    render() { 
        return (  
            <div className="primary-container">
                <div className="large-container">

                  <div className="second-container">  
                
                        <form onSubmit={this.loginSubmit}>
                            <input 
                            className="inputtext" 
                            value={this.state.usernameInput} 
                            type="text"
                            onChange={this.changeInput}
                            placeholder="username" /> 

                        <input 
                            className="inputtextone" 
                            value={this.state.passwordInput} 
                            type="text"
                            placeholder="password"
                            onChange={this.passwordChange}
                            />   

                            <button>Submit</button>
                        </form> 

                    </div>             
                        
                        

                </div>
                    
                

            </div>
        )
    }

}
 
export default Login;