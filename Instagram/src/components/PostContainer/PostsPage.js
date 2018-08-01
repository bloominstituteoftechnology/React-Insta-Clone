import React from 'react';
import PostsContainer from './components/PostContainer/Postscontainer';
import SearchBar from './components/SearchBar/SearchBar';

const PostsPage = props => {
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

