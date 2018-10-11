import React from 'react';
import Login from '../Login/Login';



const Authenticate = App => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      login: false
     }
     this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin = () => {
    this.setState({
      login: true
    })
  }

  render() { 
    if(this.state.login) {
      return <App />;
    } else {
      return (
        <Login handleLogin={this.handleLogin}/>
      )
    }
  }
}
 
export default Authenticate;