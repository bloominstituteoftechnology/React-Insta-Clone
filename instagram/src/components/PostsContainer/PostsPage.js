import React from 'react';
import SearchBar from '../SearchBar/SearchBarContainer.js';
import PostsContainer from './PostsContainer.js';
import dummyData from '../../dummy-data.js';

class PostsPage extends React.Component {
    constructor() {
	super();
	this.state = {
	    posts: [],
	    search: ''
	};
    }

    componentDidMount() {
	this.setState({
	    posts: dummyData
	});
    }

    handleInput = e => {
	this.setState({
	    [e.target.name]: e.target.value
	});
    }
    render() {
	return (
            <div>
              <SearchBar handleInput={this.handleInput} />
              <PostsContainer posts={this.state.posts} searchTerm={this.state.search} />
	    </div>
	);
    }
}

export default PostsPage;
