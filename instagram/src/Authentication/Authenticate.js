import React from 'react';
import Login from '../components/Login/Login'

const Authenticate = Component => {
  class Page extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedIn: localStorage.getItem('loggedIn'),
        username: "",
        password: "",
        firstLoad: localStorage.getItem('firstLoad'),
      }
    }

    login = (event) => {
      const user = localStorage.getItem('username');
      const pass = localStorage.getItem('password');
      const userIn = this.state.username;
      const passIn = this.state.password;

      if(user === userIn && pass === passIn) {
        localStorage.setItem('loggedIn', true);

        this.setState({
          loggedIn: true
        });
      }
    }

    logout = (event) => {
      console.log('test')
      localStorage.setItem('loggedIn', false);

      this.setState({
        loggedIn: localStorage.getItem('loggedIn')
      });
    }

    signUp = (event) => {
      event.preventDefault();
      localStorage.setItem('username', this.state.username);
      localStorage.setItem('password', this.state.password);
    }

    handleUser = (event) => {
      event.persist()
      this.setState(() => {
        return {username: event.target.value}
      });
    }

    handlePassword = (event) => {
      event.persist()
      this.setState(() => {
        return {password: event.target.value}
      });
    }

    componentDidMount() {
      if(this.state.firstLoad === null) {
        alert("Step 1: Enter text to both input fields\n Step 2: Click Sign Up\n Step 3: Click Sign In")
        localStorage.setItem('firstLoad', "true");
        this.setState({
          firstLoad: true
        })
      }
    }

    render() {
      const page = this.state.loggedIn === "false" || this.state.loggedIn === null
                                                      ? <Login login={this.login}
                                                               handleUser={this.handleUser}
                                                               handlePass={this.handlePassword}
                                                               signup={this.signUp}
                                                           />
                                                      : <Component logout={this.logout} />

      return(
        <div>
          {page}
        </div>
      );
    };
  }

  return Page;
}

export default Authenticate;
