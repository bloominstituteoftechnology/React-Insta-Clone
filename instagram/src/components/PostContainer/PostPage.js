import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostPage extends React.Component{
    constructor(){
        super();
        this.state={
            posts:[],
            filteredPosts: [],
        }
    }

    componentDidMount() {
        this.setState({posts: dummyData});
      }
    
    searchHandle = e => {
        const posts = this.state.posts.filter(p => {
          if (p.username.includes(e.target.value)) {
            return p;
          }
        });
        this.setState({ filteredPosts: posts });
      };

    render() {
        return (
            <div className="post-page">
                <SearchBar 
                    searchTerm={this.state.searchTerm}
                    searchPosts={this.searchHandle}
                />
                <PostContainer 
                    posts={
                        this.state.filteredPosts.length > 0
                          ? this.state.filteredPosts
                          : this.state.posts
                    }
                />
            </div>
        )
    }
}

export default PostPage;