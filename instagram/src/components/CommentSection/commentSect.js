import React, { Component } from 'react';
import './comments.css';
import Comments from './comments';

/*
Passed from post.js

        time={props.timestamp}
        comments={props.comments}
        likes={props.likes}
*/

class CommentSect extends Component {
    constructor() {
        super();
        this.state = {}
    }

    handleAddComment  = (event) => {
           event.preventDefault();
           console.log(event)
       }


componentDidMount() { 
    this.setState({
        commentData: this.props.comments,
        time: this.props.time,
        likes: this.props.likes
    })
}

    render() {
        return(
            
            <div className="comment-section-wrapper">

                <div className = "icons">
                    <img src="https://img.icons8.com/ios/50/000000/like.png" alt="like post"/>
                    <img src="https://img.icons8.com/ios/50/000000/speech-bubble.png" alt = "comment on post"/>
                </div>
            

                <div className="likes">
                    <strong>{this.props.likes} likes</strong>
                </div>

                <div>
                    {this.props.comments.map( data => <Comments key = {data.key} user={data.username} text={data.text}/>)}
                </div>
                
                <div className="time-stamp">
                    {this.props.time}
                </div> 

                    <div className="comment-input">
                    <form onSubmit={(event) => this.handleAddComment} >
                        <input className="input-comment" type="text" placeholder="Add a comment..." />
                    </form>
                        <img className="comment-dots" src="https://img.icons8.com/ios-glyphs/30/000000/more.png" alt="more options"></img>
                    </div>
            </div>
            
        )
    }
}

export default CommentSect;