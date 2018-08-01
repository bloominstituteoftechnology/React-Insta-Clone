import React from 'react';

const withAuthorization = (LogInComponent, MainComponent) =>
  class AuthSwitcher extends React.Component {
    state = {
      loggedIn: false
    };

    handleLogIn = username => {
      this.setState({ loggedIn: true }, () =>
        localStorage.setItem('insta-user', username)
      );
    };
    handleLogOut = () => this.setState({ loggedIn: false });

    render() {
      if (this.state.loggedIn) {
        return <MainComponent onLogOut={this.handleLogOut} />;
      } else {
        return <LogInComponent onLogIn={this.handleLogIn} />;
      }
    }
  };

export default withAuthorization;
