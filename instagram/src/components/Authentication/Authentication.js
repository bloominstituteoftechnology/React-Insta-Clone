import React from 'react';
import LoginPage from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      }
    }

    updateUser = event => {
      event.preventDefault();
      this.setState({
        loggedIn: true
      })
    }

    render() {
      if (this.state.loggedIn === false) {
        return (
          <div>
            <LoginPage updateUser={this.updateUser}/>
          </div>
        )
      }
      else {
        return (console.log('yesss'), <App />)
      }
    }
  };

export default Authenticate