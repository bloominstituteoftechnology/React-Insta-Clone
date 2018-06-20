import React from 'react';
import Login from '../Login/Login';

const Authenticate = App => {
  return class extends React.Component{
      constructor(props){
          super(props);
          this.state={
              loggedIn: false
          }
      }
      componentDidMount(){
          if(window.localStorage.getItem('username')){
              this.setState({
                loggedIn: true
              })
          }else{
            this.setState({
                loggedIn: false
              })
          }
      }
      render(){
          return this.state.loggedIn ? <App /> :  <Login />
      }
  } 
}
export default Authenticate;