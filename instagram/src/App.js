import React, { Component } from 'react';
import './App.scss';
import withAuthenticate from './authentication/withAuthenticate'
import PostPage from './components/PostContainer/PostPage'
import Login from "./components/Login/Login";

const ComponentFromWithAuthenticate = withAuthenticate(Login)(PostPage)

class App extends Component {
  constructor(){
     super()
     this.state = {
          isLoggedIn:false,
          logginError:{}
     }
     this.useCache = false;
     this.clearCacheFlag = true;
  }
  
  isCredentialValid = (username, password) =>{
      return username.length > 2 && password.length >2
  }
  
  login = (username, password) =>{
      console.log('username', username)
      console.log('password', password)
      if(this.isCredentialValid(username, password)){
          this.setState({isLoggedIn: true})
      }else{
          this.setState({loginError:{type:'length', message:'You need to have ....'}})
      }
  }
  
  logout = () =>{
      console.log('onLogout')
      this.setState({isLoggedIn: false})
  }
 
  render() {
    return (
      <div className="App">
          <ComponentFromWithAuthenticate
            {...this.state}
             onLogin={this.login}
             onLogout={this.logout}
             loginError={this.state.loginError }
          />
      </div>
    );
  }
}

export default App;
