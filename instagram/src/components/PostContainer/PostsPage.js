import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            whatIsFilteredPosts: []
        };
    }

    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    searchPostsHandler = e => {
        const posts = this.state.posts.filter(pIsRegularP => {
            if (pIsRegularP.username.includes(e.target.value)) {
                return pIsRegularP;
            }
        });
        this.setState({ whatIsFilteredPosts: posts});
    }

    render(){
        return (
        <div className="App">
            <SearchBar 
            searchTerm={this.state.searchTerm}
            searchPosts={this.searchPostsHandler}
            />
            <PostContainer
            posts={
                this.state.whatIsFilteredPosts.length > 0 ? this.state.whatIsFilteredPosts : this.state.posts 
            }
            /> 
            {/* dummyData={props.dummyData}
            handleAddComment={this.addComment}
            handleChangeComment={this.changeComment} */}
            />
        </div>
        )
    }

}

export default PostsPage;