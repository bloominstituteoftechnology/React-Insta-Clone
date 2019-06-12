import React from 'react';

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        signedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({ signedIn: false });
      } else {
        this.setState({ signedIn: true });
      }
    }
    render() {
      if (this.state.signedIn) return <PostsPage />;
      return <LoginPage />;
    }
  };

export default withAuthenticate;