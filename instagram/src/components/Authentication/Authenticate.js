import React from 'react';

import PostsPage from '../PostContainer/PostsPage';
import LoginPage from './LoginPage';

function Authenticate(Page) {

  return class extends React.Component {

    render() {

      return this.props.loggedIn ?
      (<Page
        displayedData={this.props.displayedData}
        searchFunc={this.props.search}
        addLike={this.props.addLike}
        addComment={this.props.addComment}
        removeComment={this.props.removeComment}
        username={this.props.username}
      />)
      :
      (<LoginPage />);

    }

  }

}

export default Authenticate(PostsPage);
