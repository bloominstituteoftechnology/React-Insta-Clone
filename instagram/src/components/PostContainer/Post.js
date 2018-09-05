import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import HeartIcon from '../../assets/heart-icon.png';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.post.comments,
            newComment: "",
            likes: 0
        };
    }

    addNewComment = (e) => {
        e.preventDefault();
        this.setState({
            comments: [...this.state.comments, { text: this.state.newComment, username: "Person" }],
        });
    }


    handleChange = event => {
        this.setState({
            newComment: event.target.value
        });
    };

    addLikes = event => {
        event.preventDefault();
        this.setState({ likes: this.state.likes + 1 
        });
    };

render() {
    return (
        <div className="post">
            <img className="avatar" src={this.props.post.thumbnailUrl} />
            <div className= "username bold">
                { this.props.post.username }
            </div>
            <img className= "img-content" src={this.props.post.imageUrl}/>
            <div className="bold likes">
                {this.state.likes} likes
            </div>
            <img onClick={this.addLikes} src={HeartIcon} alt="Heart Icon" className="like-icon" />
            <div className="comment-container">
                {this.state.comments.map((comment,i) => (
                    <CommentSection
                        comment={comment}
                        key= {i}
                        text= {comment.text}
                    />

                ))}
         </div>
         
            <form
                onSubmit = {this.addNewComment}
            >  
                <input
                    onChange={this.handleChange}
                    className="comment-input"
                    type="text"
                    placeholder="Add a comment..."
                    name = "newComment"
                    value = {this.state.newComment}
                />
                <button>Submit</button>
            </form>
            </div>
            );
        };
    };

export default Post;


