import React from 'react';
const Authenticate = App => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      login: false
     }
     this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.setState({
      login: true
    })
  }

  render() { 
    if(this.state.login) {
      return <App />;
    } else {
      return (
        <div className="login" onClick={this.handleLogin}>
          login
        </div>
      )
    }
  }
}
 
export default Authenticate;