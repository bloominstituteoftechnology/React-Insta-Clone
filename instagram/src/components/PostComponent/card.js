import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from './CommentComponent/CommentSection';
import moment from 'moment';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.post.comments,
            currentComment: '',
            currentUser: 'kamalnrf',
            likes: props.post.likes,
            liked: false
        };
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

    addLike = (event, prevState) => {
        console.log('Clicked')
        const likes = this.state.likes
        this.setState(state => {
            if (!state.liked)
                return {
                    likes: likes + 1,
                    liked: true
                }
            else
                return {
                    likes: likes - 1,
                    liked: false
                }
        })
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
                        <i className="fas fa-heart" onClick={this.addLike}></i>
                        <i className="fas fa-comment"></i>
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

export default Card;