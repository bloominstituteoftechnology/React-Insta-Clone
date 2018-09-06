import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import dummyData from '../../instagram_assets/dummy-data.js';
import Timeline from '../Timeline/Timeline.js';

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            filteredPosts: []
        };
    }

    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    searchForPosts = event => {
        const posts = this.state.posts.filter(post =>{
            if (post.username.includes(event.target.value)) {
                return post;
            }
        });
        this.setState({filteredPosts: posts});
    }

    render() {
        return (
            <div className="App">
            <SearchBar searchForPosts={this.searchForPosts}/>
            <Timeline posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} />
            </div>
        );
    }
}

export default PostsPage;