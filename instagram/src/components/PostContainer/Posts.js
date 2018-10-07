import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

class Posts extends React.Component {
    render() {
        return(
            <div key={this.props.timestamp} className="post">
                {this.props.data.map(postProps => {
                    return (
                        <>
                            <div className="postTop">
                                <img className="profilePic" src={postProps.thumbnailUrl} alt={"profile pic"}/>
                                <h4 className="username">{postProps.username}</h4>
                            </div>
                            <div className="pic">
                                <img className="postPic" src={postProps.imageUrl} alt={"post pic"} />
                            </div>
                            <div className="commentSection">
                                <CommentSection likes={postProps.likes} comments={postProps.comments} />
                            </div>
                        </>
                    )
                })}
            </div>
        )
    }
}

export default Posts;