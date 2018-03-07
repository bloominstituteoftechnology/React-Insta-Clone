import React, { Component } from 'react';

class CommentSection extends Component {
    constructor(props) {
        super();
        this.state = {
            username: "AD & Josh",
            comments: [],
            newComment: ''
        }
    }


    componentDidMount() {
        this.setState({
            comments: this.props.comments
        });
    }

render() {
    return (
        <div className="CommentSection">
            <div className="CommentSection__comment_list">
             {this.state.comments.map((comment, index) => {
                 return (
                    <div className="CommentSection__comment" key={index}>
                        <h4 className="CommentSection__comment-user">{comment.username}</h4>
                        <div className="CommentSection__comment-text">{comment.text}</div>
                    </div>
                 );
         })}
            </div>
        </div>
    );
}

};

export default CommentSection;