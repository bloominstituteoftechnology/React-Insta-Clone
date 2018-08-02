import React from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './Postscontainer';
import SearchBar from '../SearchBar/SearchBarContainer';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            filteredPosts: []
        };
    }
    componentDidMount() {
        this.setSate({ posts: dummyData });
    }

    searchPostHandler = e => {
        const posts = this.stateposts.filter(p => {
            if (p.username.includes(e.target.value)) {
                return p;
            }
        });
        this.setState({ filterPosts: posts });
    };
    render() {
        return (
            <div className="App">
                <SearchBar
                    searchTerm={this.state.searchTerm}
                    searchPosts={this.searchPostHandler}
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
}

export default PostPage;
