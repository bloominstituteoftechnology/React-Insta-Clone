import React from 'react';
import styled from 'styled-components';

import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

const StyledPostsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledPosts = styled.div`
  max-width: 600px;
  width: 100%;
`

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
          <StyledPostsPage>
            <SearchBar search={this.search} />
            <StyledPosts>
              {this.state.posts.map((post, index) => (
                <PostContainer 
                  postKey={index} 
                  post={post} 
                  addNewComment={this.addNewComment} 
                  addLike={this.addLike}
                 />
              ))}
            </StyledPosts>
          </StyledPostsPage>
        );
      }
}

export default PostsPage;