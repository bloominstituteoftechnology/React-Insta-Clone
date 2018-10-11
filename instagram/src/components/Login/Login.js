import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="Login" onClick={this.props.handleLogin}>
        login
      </div>
     );
  }
}
 
export default Login;