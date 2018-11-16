import React from 'react';

import AddPostPage from '../PostContainer/AddPostPage';

const Authenticate = (Page) => (Login) => {

  return class extends React.Component {

    render() {

      return this.props.loggedIn ?
        (this.props.addingPost ?
        (<AddPostPage submitPost={this.props.submitPost} addPost={this.props.addPost} />)
        :
        (<Page
          displayedData={this.props.displayedData}
          searchFunc={this.props.searchFunc}
          addLike={this.props.addLike}
          addComment={this.props.addComment}
          removeComment={this.props.removeComment}
          username={this.props.username}
          setUsername={this.props.setUsername}
          addPost={this.props.addPost}
        />))
      :
      (<Login setUsername={this.props.setUsername}/>);

    }

  }

}

export default Authenticate;
