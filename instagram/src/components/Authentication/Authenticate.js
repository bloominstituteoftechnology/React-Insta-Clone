import React from 'react';

import Login from '../Login/Login';

const Authenticate = App  => (
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount(){
      const loginInfo = JSON.parse(localStorage.getItem('instaCloneLogin'));
      if (loginInfo && loginInfo.username) {
        this.setState({
          loggedIn: true,
        })
      }
    }


    render () {
      return this.state.loggedIn ?
        <App 
          data={this.props.data}
          searchText={this.props.searchText}
          handleSearch={e => this.props.handleSearch(e)}
          submitComment={(c, u, t) => this.props.submitComment(c, u, t)}
          updateLikes={(u, t, n) => this.props.updateLikes(u, t, n)}
          handleRemoveComment={(u, t, i) => this.props.handleRemoveComment(u, t, i)}
        />
        :
      <Login handleLogin={(name, password) => this.props.handleLogin(name, password)}/>
    }
  }
)

export default Authenticate;