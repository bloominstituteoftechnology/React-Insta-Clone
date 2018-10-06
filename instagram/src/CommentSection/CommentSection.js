import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: this.props.obj.comments
        }
    }

    render() {
        return (
            <div className="commentSection">
                <div className="comment-icons">
                    <a href="#"><i className="far fa-heart"></i></a>
                    <a href="#"><i className="far fa-comment"></i></a>
                </div>

                { this.props.obj.likes === 1 ? 
                    ( <p className="like">1 like</p> ) :
                    ( <p className="likes">{this.props.obj.likes} likes</p> )
                }
                <div className="commentsContainer">
                    {this.props.obj.comments.map(item => {
                        return (
                            <Comment key={item.text} username={item.username} text={item.text} />
                        )
                    })}
                </div>
                <p className="timestamp">{this.props.obj.timestamp}</p>

                <form className="addComment">
                <input placeholder="Add a comment..."></input>
                <p>...</p>
                </form>

            </div>
        )
    }
}

export default CommentSection;