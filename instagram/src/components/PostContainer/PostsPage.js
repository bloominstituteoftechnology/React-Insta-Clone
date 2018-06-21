import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';
import './PostContainer.css'

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            filteredPosts: [],
        };
    }

    componentDidMount() {
        this.setState({posts: dummyData});
    }

    searchPosts = event => {
        const posts = this.state.posts.filter(post => {
            if(post.username.includes(event.target.value)) {
                return post;
            }
        });
        this.setState({filteredPosts: posts});
    }

    logout() {
        localStorage.removeItem('user');
        window.location.reload();
    }

    render() {
        return (
            <div className="App">
                <SearchBar searchPosts={this.searchPosts} logout={this.logout} />
                <PostContainer posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} />
            </div>
        )
    }
}

export default PostsPage;