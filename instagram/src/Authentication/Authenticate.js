import React from 'react';
import LoginPage from '../components/Login/Login';
import App from '../App';
import PostsPage from '../components/PostContainer/PostsPage'

const Authenticate = WrappedComponent => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      }
    }

    render() {
      if (localStorage.getItem('user')) {
        return <PostsPage data={this.props.data} users={this.props.users} searched={this.props.searched} onSearch={this.onSearch} handleNewSearch={this.handleNewSearch} />
      } else {
        return <LoginPage handleNewLogin={this.props.handleNewLogin} onLogin={this.props.onLogin} />
      }
    }

  }
}


export default Authenticate(App);