import React from 'react';
import Comment from './Comment.js';
import Authenticate from '../Authenticate/Authenticate.js';
//import * as globalStyles from '../../globalStyles.js';
import * as comments from './commentComponents.js';

class CommentSection extends React.Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            commentList: props.comments || [],
            lastActivity: this.props.lastActivity,
            likes: this.props.likes,
            commentBody: ''
        }
    }
    render() {
        return (
            <comments.Comments>
                <comments.CommentsInteraction>
                    <comments.CommentsInteractionImg
                        src="img/interact-like.png"
                        alt="like button"
                        onClick={this.addLike}
                    />
                    <comments.CommentsInteractionImg
                        src="img/interact-comment.png"
                        alt="comment button"
                    />
                    <comments.CommentsLikesCount>{this.state.likes} likes</comments.CommentsLikesCount>
                </comments.CommentsInteraction>
                <div>
                {
                    this.state.commentList.map((comment, commentIndex) => (
                        <Comment
                            key={commentIndex}
                            username={comment.username}
                        >{comment.text}
                        </Comment>
                    ))
                }
                </div>
                <comments.CommentsPostTime>{this.state.lastActivity}</comments.CommentsPostTime>
                <comments.CommentsAdd onSubmit={this.addNewComment}>
                    <comments.CommentsAddInput
                        type="text"
                        placeholder="Add a comment..."
                        onChange={this.typeComment}
                        value={this.state.commentBody}
                    />
                    <comments.CommentsUnknownDots>...</comments.CommentsUnknownDots>
                </comments.CommentsAdd>
            </comments.Comments>
        )
    }

    //--------------------------------------------
    addLike = (clickEvent) => {
        console.log("ASDF")
        this.setState(function(prevState, props){
            return {likes: prevState.likes+1}
        });
    }
    typeComment = (changeEvent) => {
        let newValue = changeEvent.target.value;
        this.setState({
            commentBody: newValue
        });
    }
    addNewComment = (submitEvent) => {
        submitEvent.preventDefault();
        let newCommentBody = this.state.commentBody;
        if(newCommentBody.length <= 0){ return;}
        let newComment = {
            username: Authenticate.userName,
            text: newCommentBody
        };
        this.setState({
            commentList: [...this.state.commentList, newComment],
            lastActivity: Date.now(),
            commentBody: ''
        })
    }
}

export default CommentSection;
