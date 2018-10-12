import React, { Component } from 'react';
import Comments from './Comments'
import './App.css';
 class MakePost extends Component {
    constructor(props){
        super(props);
        this.state = {comments: props.post.comments,currentComment: '', currentUser: 'SK1993'};
    }
     commentHolder = (event) => {
        this.setState({ currentComment: event.target.value });
    }
     addComment = (event, prevState) => {
        event.preventDefault();
        let comment = this.state.currentComment;
        let user = this.state.currentUser;
        console.log(comment, user);
        let newList = this.state.comments.slice();
        let newComment = {text: comment, username: user};
        newList.push(newComment);
        this.setState({comments: newList});
    }
     render() {
        return (
            <div className="post" key={this.props.post.timestamp}>
                <div className="top-content">
                    <div className="image-container">
                        <img className='thumbnail' src={this.props.post.thumbnailUrl} alt="thumbnail of user" />
                        <p className="username">{this.props.post.username}</p>
                    </div>
                </div>

                <img src={this.props.post.imageUrl} alt="users post" />

                <div className="bottom-content">
                    <div className="icons">
                    <div className="social">
                     <i className="fa fa-heart" />
                   </div>
                    </div>
                    
                    <p>{this.props.post.likes} likes</p>
                    <Comments comments={this.state.comments} />
                    <form onSubmit={this.addComment}>
                        <input type="text" placeholder="Add a comment" onChange={this.commentHolder} ></input>
                    </form>
                    <p>{this.props.post.timestamp}</p>
                </div>
            </div>
        );
    }
}
 export default MakePost;