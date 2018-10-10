import React from 'react';

const Authenticate = (App, Login) =>
class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            username: '',
            password: ''
        }

        this.login = this.login.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }

    login(event){
        event.preventDefault();
        console.log(window.localStorage.getItem('loggedIn'));
        if(this.state.username && this.state.password){
            window.localStorage.setItem('loggedIn', 'true');
            window.localStorage.setItem('username', this.state.username);
            this.setState({loggedIn: true});
        }
        
      }

      inputHandler(event){
          if(event.target.name === 'username'){
              this.setState({username: event.target.value});
          }
          else if(event.target.name === 'password'){
              this.setState({password: event.target.value});
          }

      }

       componentDidMount(){
           console.log(window.localStorage.getItem('loggedIn'));
        let loggedIn = window.localStorage.getItem('loggedIn');
        if (loggedIn){
            let usernameCheck = window.localStorage.getItem('username');
            this.setState({loggedIn: true, currentUser: usernameCheck});
        } 
        
            
        
    }  

    render(){
        return (
        <div>
        {window.localStorage.getItem('loggedIn') ? <App /> : <Login login={this.login} onKeyDown={this.inputHandler}/>}
        </div>
            
            )
        
        
    }
}


export default Authenticate;