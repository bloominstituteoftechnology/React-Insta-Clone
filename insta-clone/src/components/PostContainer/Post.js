import React, { Component } from 'react';
import './PostContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';

// let storage = window.localStorage;
// storage.setItem('posts', '');

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {comments: [], currentComment: '', currentUser: 'Bobby123', likes: 0, liked: false};
    }

    componentDidMount(){
        this.setState({comments: this.props.post.comments, likes: this.props.post.likes});
        // let storagePost = storage.getItem('posts');
        // storagePost += JSON.stringify(this.props);
        // storage.setItem('posts', storagePost);
    }

    commentHolder = (event) => {
        this.setState({ currentComment: event.target.value });
    }

    addComment = (event, prevState) => {
        event.preventDefault();
        let comment = this.state.currentComment;
        let user = this.state.currentUser;
        let newList = this.state.comments.slice();
        let newComment = {text: comment, username: user};
        newList.push(newComment);
        this.setState({comments: newList});
        event.target.children[0].value = '';
    }

    toggleLike= () => {
        if (!this.state.liked){
            this.setState((prevState) => {
                return ({likes: prevState.likes + 1, liked: !prevState.liked});
            });
        } else {
            this.setState((prevState) => {
                return ({likes: prevState.likes - 1, liked: !prevState.liked});
            })
        }
    }

    render() {
        return (
            <div className="post" key={this.props.post.timestamp}>
                <div className="header row">
                    <div className="col-sm-12 d-flex">
                        <img src={this.props.post.thumbnailUrl} alt="thumbnail of user" />
                        <p className="username">{this.props.post.username}</p>
                    </div>
                </div>
                <img src={this.props.post.imageUrl} alt="user's beautiful post" />
                <div className="bottom">
                    <div className="icons">
                        <FontAwesomeIcon icon={['far', 'heart']} className={`icon ${this.state.liked ? 'red' : ''}`} onClick={this.toggleLike} />
                        <FontAwesomeIcon icon={['far', 'comment']} className="icon" />
                    </div>
                    <p className="likes">{this.state.likes} likes</p>
                    <CommentSection comments={this.state.comments} />
                    <p className="timestamp">{moment(this.props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow().toUpperCase()}</p>
                    <form onSubmit={this.addComment} className="add-comment">
                        <input type="text" placeholder="Add a comment" onChange={this.commentHolder} ></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default Post;