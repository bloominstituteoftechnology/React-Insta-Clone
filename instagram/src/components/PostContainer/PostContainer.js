import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {

    render() {
        return (
        <div className="postContainer">
            <div className="post">
                <div className="postHeader">
                    <img src={this.props.icon} /> {this.props.username}
                </div>

                <div className="postImage">
                    <img src={this.props.image} />
                </div>

                <div className="likes">
                    {this.props.likes}
                </div>  
            </div>
            
            <div className="comments">
            <div className="commentContainer">
                {this.props.comments.map(comment => {
                    return (
                        <div>
                            <CommentSection
                                username={comment.username}
                                text={comment.text}
                            />
                        </div>
                    )
                })}
            
            </div>
            </div>
        </div>
        )

    }
};

export default PostContainer;