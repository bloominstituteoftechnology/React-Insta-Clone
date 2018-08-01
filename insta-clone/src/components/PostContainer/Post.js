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
        this.state = {comments: props.post.comments, currentComment: '', likes: props.post.likes, liked: false, id: props.id};
    }

    componentDidMount() {
        // localStorage.getItem(this.state.id) && 
        let comments = JSON.parse(localStorage.getItem(this.state.id));
        if (localStorage.getItem(this.state.id)){
            this.setState({comments});
        } else {
            localStorage.setItem(this.state.id, JSON.stringify(this.state.comments));
        }
    }

    commentHolder = (event) => {
        this.setState({ currentComment: event.target.value });
    }

    addComment = (event, prevState) => {
        event.preventDefault();
        if (this.state.currentComment.length > 0){
            let comment = this.state.currentComment;
            let user = this.props.currentUser;
            let newList = this.state.comments.slice();
            let newComment = {text: comment, username: user};
            newList.push(newComment);
            this.setState({comments: newList, currentComment: ''});
            localStorage.setItem(this.state.id, JSON.stringify(newList));
        }
    }

    deleteComment = (event) => {
        let comments = JSON.parse(localStorage.getItem(this.state.id));
        let result = comments.filter(comment => comment.text !== event.target.innerText)
        localStorage.setItem(this.state.id, JSON.stringify(result));
        this.setState({
            comments: this.state.comments.filter(comment => comment.text !== event.target.innerText)
        })
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
                    <CommentSection comments={this.state.comments} deleteComment={this.deleteComment} />
                    <p className="timestamp">{moment(this.props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow().toUpperCase()}</p>
                    <form onSubmit={this.addComment} className="add-comment">
                        <input type="text" placeholder="Add a comment" onChange={this.commentHolder} value={this.state.currentComment} ></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default Post;