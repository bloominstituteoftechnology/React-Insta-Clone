import React, {Component} from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent/PostContent';
import propTypes from 'prop-types';

class PostContainer extends Component {
  constructor(props) {
    super(props);

    const id = this.props.id;
    let comments = JSON.parse(localStorage.getItem(id));
    comments === null ? comments = this.props.data.comments : comments
    this.state = {
      id: id,
      user: this.props.data,
      comments: comments,
      username: '',
      commentText: ''
    }
  }
  componentDidMount() {
    this.setState({
      user: this.props.data,
      username: localStorage.getItem('username')
    })
  }
  addNewComment = (e) => {
    e.preventDefault();
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
    this.setState({
      commentText : e.target.value
    })
  }

  close = (e) => {
    const comments = Object.assign([],this.state.comments);
    comments.splice(e.target.parentNode.id, 1)
    localStorage.setItem(this.state.id, JSON.stringify(comments));
    this.setState({
      comments: comments
    });
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
