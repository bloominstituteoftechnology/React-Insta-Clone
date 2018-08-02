import React from 'react';

const withAuthorization = (LogInComponent, MainComponent) =>
  class AuthSwitcher extends React.Component {
    state = {
      loggedIn: false
    };

    componentDidMount() {
      if (localStorage.getItem('insta-user')) {
        this.setState({
          loggedIn: true
        });
      }
    }

    handleLogIn = username => {
      this.setState({ loggedIn: true }, () =>
        localStorage.setItem('insta-user', username)
      );
    };
    handleLogOut = () => this.setState({ loggedIn: false }, () => localStorage.removeItem('insta-user'));

    render() {
      if (this.state.loggedIn) {
        return <MainComponent onLogOut={this.handleLogOut} />;
      } else {
        return <LogInComponent onLogIn={this.handleLogIn} />;
      }
    }
  };

export default withAuthorization;
