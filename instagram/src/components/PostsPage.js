import React, { Component } from 'react';
import dummyData from '../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from './SearchBar';

class PostsPage extends Component {
    constructor() {
        super();
        this.state= {
            posts: [],
            filteredPosts:[]
        };
    }
    componentDidMount(){
        this.setState({ posts:dummyData })
    }


searchPostsFilterHandler = banana => {
    //eslint-disable-next-line
    const posts = this.state.posts.filter(apple => {
        if (apple.username.includes(banana.target.value)){
            return apple;
        }
    });
    this.setState({filteredPosts: posts})
};
render() {
    return(
      <div className="App">
        <SearchBar
            searchTerm={this.state.searchTerm}
            searchPosts={this.searchPostsFilterHandler} 
        />
        <PostContainer 
            posts={
                this.state.filteredPosts.length>0
                ? this.state.filteredPosts:this.state.posts
            }
        />
      </div>  
    );
}

}

export default PostsPage

