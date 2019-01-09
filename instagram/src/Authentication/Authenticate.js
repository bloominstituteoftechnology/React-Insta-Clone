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

    checkLogin = () => {
      if (localStorage.getItem('user')) {
        this.setState({loggedIn: true})
      }
    } 

    componentDidMount() {
      this.checkLogin();
    }

    render() {
      if (this.state.loggedIn === true) {
        return <PostsPage 
                  data={this.props.data} 
                  users={this.props.users} 
                  searched={this.props.searched} 
                  onSearch={this.props.onSearch} 
                  handleNewSearch={this.props.handleNewSearch} />
      } else {
        return <LoginPage 
                  handleNewLogin={this.props.handleNewLogin} 
                  onLogin={this.props.onLogin} 
                  loggedIn={this.state.loggedIn} />
      }
    }
  }
}


export default Authenticate(App);