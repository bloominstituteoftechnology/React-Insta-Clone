import React from 'react';

import PostsPage from '../PostContainer/PostsPage';
import LoginPage from './LoginPage';

function Authenticate(Page) {

  return class extends React.Component {

    render() {

      return this.props.loggedIn ?
      (<Page
        displayedData={this.props.displayedData}
        searchFunc={this.props.searchFunc}
        addLike={this.props.addLike}
        addComment={this.props.addComment}
        removeComment={this.props.removeComment}
        username={this.props.username}
        setUsername={this.props.setUsername}
      />)
      :
      (<LoginPage setUsername={this.props.setUsername}/>);

    }

  }

}

export default Authenticate(PostsPage);
