import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import moment from './../../../node_modules/moment';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: props.comments
        }
    }

     addNewComment = (inputText) => {
        
        const currentComments = this.state.comments.slice();
        const newComment = {
            username: 'anonamous',
            text: inputText
        }
        currentComments.push(newComment);
        this.setState({comments: currentComments})
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.comments.map((comment, index) => {
                        return (
                            <Comment
                                comment={comment}
                                key={index}
                                username={comment.username}
                                text={comment.text}
                            />   
                        )
                    })}
                </div>
                <div className="timestamp">
                    {moment().startOf('hour').fromNow()}
                </div>
    
                <div className="add-comment">
                    <CommentForm createComment={this.addNewComment}/>
                </div>
            </div>
        )
    }
}
export default CommentSection;