import React from 'react';
import Login from '../Login/Login'

const Authenticate = App =>
  class extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
            login: false,
            username: '',
            password: ''
          }
      }

      componentDidMount() {
        localStorage.setItem('username', 'shawn');
        localStorage.setItem('password', 'cat');
      }

      handleUsername = event => {
        this.setState({ username: event.target.value });
      };

      handlePassword = event => {
        this.setState({ password: event.target.value });
      };

      loginEvent = event => {
        event.preventDefault();
        if (this.state.username === localStorage.getItem('username') && (this.state.password === localStorage.getItem('password'))) {
          this.setState({ login: true });
        } else {
          this.setState({ login: false });
        }
      };
      
    render() {
        if (this.state.login) {
            return <App />;
        } else {
            return <Login 
            handleUsername={this.handleUsername}
            handlePassword={this.handlePassword}
            loginEvent={this.loginEvent}
            />;
        }
    }
  };

  export default Authenticate;