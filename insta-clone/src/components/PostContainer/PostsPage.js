import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostsContainer from '../PostContainer/PostsContainer'
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            filteredPosts: [],
        };
    }

    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    searchPostsHandler = event => {
        const posts = this.state.posts.filter(param => {
            if (param.username.includes(event.target.value)) {
                return param;
            }
        });
        this.setState({ filteredPosts: posts });
    };

    render() {
        return (
            <div>
            <SearchBar 
            searchPosts={this.searchPostsHandler}
            />
            <PostsContainer 
            posts={
                this.state.filteredPosts.length > 0
                    ? this.state.filteredPosts
                    : this.state.posts
            }
            />
            </div>
        );
    }
};

export default PostsPage;