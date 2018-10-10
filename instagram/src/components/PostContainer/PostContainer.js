import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
// import NewComment from '../CommentSection/NewComment';
import propTypes from 'prop-types';

class PostContainer extends React.Component {
    constructor(props) {
      super(props);
  
      const id = this.props.id;
     let comments = JSON.parse(localStorage.getItem(id));
    //  || this.props.data.comments;
      if (comments === null){
          comments = this.props.data.comments;
      } else {
           return comments;
      } 
    //  comments === null ? comments = this.props.data.comments : comments
      this.state = {
        id: id,
        user: this.props.data,
        comments: comments,
        username: 'hsmith430',
        commentText: ''
      }
    }
    componentDidMount() {
      this.setState({
        user: this.props.data
      })
    }
    addNewComment = (e) => {
      // e.preventDefault();
      const text = e.target.children[0].value;
      const comments = this.state.comments;
      const username = this.state.username;
      comments.push({username,text})
      this.setState({
        comments,
        commentText: ''
      })
      localStorage.setItem(this.state.id, JSON.stringify(comments));
  
    }
    onChange = (e) => {
        // e.preventDefault();
      this.setState({
          
        commentText : e.target.value
      })
    }
  
    close = (e) => {
      const comments = Object.assign([],this.state.comments);
      console.log(e.target.parentNode.id)
      comments.splice(e.target.parentNode.id, 1)
      localStorage.setItem(this.state.id, JSON.stringify(comments));
      console.log(comments)
      this.setState({
        comments: comments
      })
    }
  
    render() {
      return (
        <section className='post-container' id={this.props.id}>
          <PostHeader  username={this.state.user.username}
                       thumbnailUrl={this.state.user.thumbnailUrl}/>
                     <img className='post-cta-image' src={this.state.user.imageUrl}
               alt={this.state.user.username} />
             <PostContent likes={this.state.user.likes}
                       comments={this.state.comments}
                     onSubmit={this.addNewComment}
                   commentText={this.state.commentText}
                          onChange={this.onChange}
                        close={this.close}/>
          <section className="post-time">
           {this.state.user.timestamp}
          </section>
        </section>
      );
    }
  }
  PostContainer.propTypes = {
    username: propTypes.object
  }
  
  export default PostContainer;