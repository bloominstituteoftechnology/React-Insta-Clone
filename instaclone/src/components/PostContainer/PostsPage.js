import React, { Component } from 'react';
import PostContainer from './PostContainer'

class PostsPage extends Component {
	render() {
    if (!this.props.appData.length) {
      return <h1>"Loading App Data..."</h1>;
    }
    return <div className="appContainer">
				<PostContainer appData={this.props.appData} searchInput={this.props.searchInput} searchHandler={this.props.searchHandler} />
			</div>;
	}
}

export default PostsPage;
