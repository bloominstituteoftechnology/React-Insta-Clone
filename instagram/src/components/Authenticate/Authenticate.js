import React from 'react';
import LogIn from '../LogIn/LogIn';

const Authenticate = App =>
  class extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              loggedIn: false,
              username: '',
              password: ''
          }
      }

    componentDidMount() {
        if(!window.localStorage.getItem(('username') && ('password'))) {
            this.setState({ loggedIn: false})
        } else {
            this.setState({ loggedIn: true })             
        }
    }

    render() {
    if (this.state.loggedIn){
        return <App />
    }
    else {
        return <LogIn />
    }}
  };



export default Authenticate;