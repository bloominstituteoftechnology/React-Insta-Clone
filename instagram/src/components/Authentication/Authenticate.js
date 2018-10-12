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
        if (localStorage.getItem('loggedIn')) {
          this.setState({ login: true });
        }
      }

      handleUsername = event => {
        this.setState({ username: event.target.value });
      };

      handlePassword = event => {
        this.setState({ password: event.target.value });
      };

      signOut = event => {
        event.preventDefault();
        if(localStorage.getItem("loggedIn")) {
          localStorage.removeItem('loggedIn');
          this.setState({ login: false });
          window.location.reload();
        }
      }

      loginEvent = event => {
        event.preventDefault();
        if (this.state.username === localStorage.getItem('username') && (this.state.password === localStorage.getItem('password'))) {
          this.setState({ login: true });
          localStorage.setItem('loggedIn', 'shawn');
        } else {
          this.setState({ login: false });
        }
        window.location.reload();
      };
      
    render() {
        if (this.state.login) {
            return <App signOut={this.signOut}/>;
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