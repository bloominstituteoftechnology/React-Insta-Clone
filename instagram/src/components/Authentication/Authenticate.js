import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
  class extends React.Component{
    state ={
        loggedIn: false,
      }

    login = () =>{
      this.setState({ loggedIn: true });
    }

    logout=()=>{
        this.setState({ loggedIn: false });
      }

    render(){
    if (this.state.loggedIn)
        return <App logout={this.logout}/>;

        return( <Login login={this.login}/>)
    }
  }

export default Authenticate;
