import React from 'react';
import PostsPage from '../PostContainer/PostsPage';

function Authenticate(Page) {

  return class extends React.Component {

    render() {

      return <Page
        displayedData={this.props.displayedData}
        searchFunc={this.props.search}
        addLike={this.props.addLike}
        addComment={this.props.addComment}
        removeComment={this.props.removeComment}
        username={this.props.username}
      />;

    }

  }

}

export default Authenticate(PostsPage);
