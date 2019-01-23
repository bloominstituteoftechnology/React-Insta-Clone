import React from 'react';
import Login from '../Login/Login';

const Authenticate = App => {
  return class extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        loggedIn: false
      }
    };

    componentDidMount(){
      if(localStorage.getItem('username')){
        this.setState({loggedIn: true});
      }
    };

    render () {
      return (
        this.state.loggedIn === true ? <App /> : <Login />
      );
    };
  }
};

export default Authenticate;
