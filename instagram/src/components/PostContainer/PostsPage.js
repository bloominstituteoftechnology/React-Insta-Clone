import React from 'react';
import './PostContainer.css';

import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends React.Component {
    state = {
        posts: [],
        user: '',
      }
    
      addNewComment = comment => {
        let posts = [...this.state.posts];
        posts[comment.key].comments.push({username: this.state.user, text: comment.text });
        this.setState({ posts: posts});
      }
    
      addLike = key => {
        let posts = [...this.state.posts];
        posts[key].likes++;
        this.setState({ posts: posts });
      }
    
      search = text => {
        let posts = this.state.posts.filter(post => post.username === text);
        this.setState({ posts: posts });
      }
      
      componentDidMount() {
        setTimeout(() => {
          this.setState({ posts: this.props.data, user: localStorage.getItem('username'), });
        }, 500);
      }
    
      render() {
        return (
          <div className="posts-page">
            <SearchBar search={this.search} />
            <div className="posts">
              {this.state.posts.map((post, index) => (
                <PostContainer 
                  postKey={index} 
                  post={post} 
                  addNewComment={this.addNewComment} 
                  addLike={this.addLike}
                 />
              ))}
            </div>
          </div>
        );
      }
}

export default PostsPage;