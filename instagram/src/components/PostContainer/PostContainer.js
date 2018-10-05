import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import AddComment from '../AddComment/AddComment';

class PostContainer extends React.Component {

    render() {
        return (
        <div className="postContainer">
            <div className="post">
                <div className="postHeader">
                    <img src={this.props.icon} /> {this.props.username}
                </div>

                <div>
                    <img src={this.props.image} className="postImage"/>
                </div>

                <div className="likes">
                    {this.props.likes} Likes
                </div>  
            </div>
            
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

            <div className="addCommentContainer">
                <AddComment />
            </div>
            
        </div>
        )

    }
};

export default PostContainer;