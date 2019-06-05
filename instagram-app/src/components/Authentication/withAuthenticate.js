import React from 'react';

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    state = {
      loggedIn: false
    };

    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({
          loggedIn: false
        });
      } else {
        this.setState({
          loggedIn: true
        });
      }
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevState !== this.state) {
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <PostsPage />;
      }
      return <LoginPage />;
    }
  };

export default withAuthenticate;
