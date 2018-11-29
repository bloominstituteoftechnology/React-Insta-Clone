import React, { Component } from 'react';
import dummyData from './../../dummy-data';
import SearchBarContainer from './../SearchBar/SearchBarContainer';
import PostContainer from './PostContainer';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            post: [],
            filteredPost: []
        };
    }

    componentDidMount() {
        this.setState({
            post: dummyData
        })
    }

    searchPostHandle = ev => {
        const post = this.state.post.filter(p => {
          if (p.username.includes(ev.target.value)) {
            return p;
          }
        })
        this.setState({
            filteredPost: post
        })
      }

      render() {
        return (
          <div className="App">
            <SearchBarContainer 
            searchName={this.state.searchName}
            searchPost={this.searchPostHandle}
            />
            <PostContainer data={this.state.post} 
            post={
              this.state.filteredPost.length > 0
              ? this.state.filteredPost
              : this.state.post
            }
            />
          </div>
        );
      }
}

export default PostsPage;
