import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            filtered: []
        }
    }
    componentDidMount() {
        this.setState({ data: dummyData });
    }

    searchPostsHandler = event => {
        const posts = this.state.data.filter(post => {
            if (post.username.includes(event.target.value)) {
                return post;
            }
        });
        this.setState({ filtered: posts });
    };

    render() {
        return (
            <div className="App">
                <SearchBar postSearched={this.state.postSearched} searchPosts={this.searchPostsHandler} />
                <PostContainer
                    data={
                        this.state.filtered.length > 0
                        ? this.state.filtered
                        : this.state.data
                    }
                />

            </div>
        );
    }
}

export default PostsPage;
