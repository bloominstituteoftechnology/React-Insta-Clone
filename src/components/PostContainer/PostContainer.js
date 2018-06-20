import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'
// import AddComment from '../CommentSection/AddComment'
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
            comment: "",
        }
    }
    handleChange = event => {
        return this.setState({ comment: event.target.value });
    }

    addNewComment = (event) => {
        event.preventDefault();
        let dataCopy = this.state.postComments.slice();
        dataCopy.push({ username: 'flintbean', text: this.state.comment });
        return this.setState({ postComments: dataCopy, comment: ''});
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
                    {this.state.postComments.map((post, i) => (
                        <CommentSection
                            key={i}
                            postComments={post.text}
                            postUser={post.username}
                        />
                    ))}
                    <form onSubmit={this.addNewComment}>
                        <input
                            className="comment-bar"
                            type="text"
                            placeholder="Add a comment..."
                            value={this.state.comment}
                            onChange={this.handleChange}
                        />
                    </form>
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