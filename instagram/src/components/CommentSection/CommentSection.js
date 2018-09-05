import React, { Component } from 'react';
import Comment from './Comment'
import './CommentSection.css';

class CommentSection extends Component {

    constructor(props) {
        super();
        this.state={
            comments:props.comments,
            likes:props.likes,
            timestamp: props.timestamp, 
            currentComment: "",
            liked: 1
        }
    }

    addNewComment = (e) => {
        if (this.state.currentComment){
        this.setState({
            comments:[...this.state.comments, {username: "TheBrockstar", text:this.state.currentComment}],
        }
        )

        e.currentTarget.value=null;
    }
    }

    removeComment = (e) => {
        let comments = this.state.comments;
        comments.splice(e.currentTarget.parentElement.id, 1);
        this.setState({
            comments: [...comments]
        })
    }

    commentChange = (e) => {
        this.setState({
            currentComment: e.currentTarget.value
        })
    }

    onEnterPress = (e) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
            console.log("Hmm");
            e.preventDefault();      
            this.addNewComment(e);
        }
    }

    likeIt = (e) => {
        this.setState({
            liked: -this.state.liked,
            likes: Number(this.state.likes) + this.state.liked
        })
        e.currentTarget.classList.toggle('liked');
    }

    commentFocus = (e) => {
        e.currentTarget.parentElement.parentElement.querySelector(".comment-input form textarea").focus();
    }

    render() { return (
          <div className="comment-section">
            <div className="comment-section-icons">

            <button className="like-icon" onClick={this.likeIt}><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path></path></svg></button>
            
            <button className="comment-icon" onClick={this.commentFocus}><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M256 64c123.5 0 224 79 224 176S379.5 416 256 416c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176m0-32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26 3.8 8.8 12.4 14.5 22 14.5 61.5 0 110-25.7 139.1-46.3 29 9.1 60.2 14.3 93 14.3 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg></button>

            </div>
            <div className="likes">
                <p>{this.state.likes} likes</p>
            </div>

            {this.state.comments.map((comment, id) => {
                return <Comment 
                username={comment.username} 
                text={comment.text}
                key={id} 
                id={id} 
                removeComment={this.removeComment} 
                />
            }
            )}
            <div className="timestamp"><p>{this.state.timestamp}</p></div>
            <div className= "comment-input">
                <form onSubmit={this.addNewComment}>
                    <textarea placeholder="Add a comment..."
                    onChange={this.commentChange} 
                    onKeyDown={this.onEnterPress}></textarea>
                </form>
                <span className="ellipsis">···</span>
            </div>
        </div>  
    )}
}

export default CommentSection;