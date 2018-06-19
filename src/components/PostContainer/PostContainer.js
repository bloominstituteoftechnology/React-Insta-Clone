import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'
import AddComment from '../CommentSection/AddComment'
import PostHeader from '../PostContainer/PostHeader'
import PropTypes from "prop-types";


class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postThumb: props.postThumb,
            postImage: props.postImage,
            postStarter: props.postStarter,
            postComments: props.postComments,
            postSubmit: props.postSubmit
        }
    }
    render() {
        return (
            <div className="post-container" >
                <PostHeader
                    postThumb={this.state.postThumb}
                    postStarter={this.state.postStarter}
                    postImage={this.state.postImage}
                />
                <div className="comment-container">
                    {this.state.postComments.map(post => (
                        <CommentSection
                            key={Math.random()}
                            postComments={post.text}
                            postUser={post.username}
                        />
                    ))}
                    <AddComment postSubmitProp={this.state.postSubmit} />
                </div>
            </div >
        );
    };
}

PostContainer.propTypes = {
    postThumb: PropTypes.string,
    postImage: PropTypes.string
};




export default PostContainer;