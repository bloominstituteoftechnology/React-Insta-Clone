import React from 'react';
import Login from '../Login/Login'
// // HOC
// const authenticate = PostPage => LoginPage => props => {
//   if (props.loggedIn) {
//     return <PostPage {...props} />;
//   }

//   return <LoginPage {...props} />;
// };

// export default authenticate;

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (this.state.loggedIn) return <App />;
      return <Login />;
    }
  };

export default Authenticate;
