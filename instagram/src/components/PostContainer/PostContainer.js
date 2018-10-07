import React from 'react';
import PropTypes from "prop-types";
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import AddComment from '../AddComment/AddComment';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            commentInputValue: '',
            comments: this.props.comments,
            likes: this.props.likes
        }
    }

    inputHandler = (event) => {
        event.preventDefault();
        this.setState({
          commentInputValue: event.target.value
        })
      }
    
      submitHandler = (event) => {
        event.preventDefault();
        let newComment = this.state.commentInputValue;
        this.setState({
            comments: this.state.comments.concat({username: 'Robin:', text: newComment }),
            commentInputValue: ''
        })
      }

      likeHandler = () => {
          let addLike = this.state.likes
          this.setState({
            likes: ++addLike
          })
          
      }

    render() {
        return (
        <div className="postContainer">
            <div className="post">
                <div className="postHeader">
                    <img src={this.props.icon} alt='userIcon'/> {this.props.username}
                </div>

                <div>
                    <img src={this.props.image} alt="postImage" className="postImage"/>
                </div>

                <div className="likes">
                    <div className="likesIcons">
                    <i className="far fa-heart" onClick={this.likeHandler}></i>
                    <i class="far fa-comment"></i>
                    </div>
                    {this.state.likes} Likes
                </div>  
            </div>
            
            <div className="commentContainer">
                {this.state.comments.map(comment => {
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
                <AddComment 
                    id={this.props.timestamp}
                    inputHandler={this.inputHandler}
                    submitHandler={this.submitHandler}
                    commentInputValue={this.state.commentInputValue}
                />
            </div>
            
        </div>
        )

    }
};

PostContainer.propTypes ={
    key: PropTypes.string,
    username: PropTypes.string,
    icon: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.string,
    inputHandler: PropTypes.func,
    submitHandler: PropTypes.func,
}

export default PostContainer;