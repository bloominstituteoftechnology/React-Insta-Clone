import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

const CommentSection = (props) => {
        return (
            <div className="commentSection">
                <div className="comment-icons">
                    <a href="#"><i className="far fa-heart"></i></a>
                    <a href="#"><i className="far fa-comment"></i></a>
                </div>

                { props.obj.likes === 1 ? 
                    ( <p className="like">1 like</p> ) :
                    ( <p className="likes">{props.obj.likes} likes</p> )
                }
                <div className="commentsContainer">
                    {props.obj.comments.map(item => {
                        return (
                            <Comment key={item.text} username={item.username} text={item.text} />
                        )
                    })}
                </div>
                <p className="timestamp">{props.obj.timestamp}</p>

                <div className="addComment">
                <input placeholder="Add a comment..."></input>
                <p>...</p>
                </div>

            </div>
        )
}

export default CommentSection;