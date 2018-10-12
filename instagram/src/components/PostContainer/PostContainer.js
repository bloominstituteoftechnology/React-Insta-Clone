import React from "react";
import PropTypes from "prop-types";
import { Heart } from "react-feather";
import { MessageCircle } from "react-feather";

// import "./PostContainer.css";
import { InstaPost } from "../../styles";

import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            ...props,
            showNewComment: true
        };
    }

    addLike = () => {
        let temp = { ...this.state.item };
        temp.likes += 1;
        this.setState({ item: temp });
    }

    toggleInput = () => {
        this.setState(prevState => ({ showNewComment: (prevState.showNewComment ? false : true) }))
    }

    render() {
        return (
            <InstaPost>
                <header>
                    <img className="thumb" src={this.state.item.thumbnailUrl} alt="user icon" />
                    <h2>{this.state.item.username}</h2>
                </header>
                <img className="postPic" src={this.state.item.imageUrl} alt="picture" />
                <div className="icons">
                    <Heart className="icon" onClick={this.addLike} />
                    <MessageCircle className="icon" onClick={this.toggleInput} />
                </div>
                <p>{this.state.item.likes} likes</p>
                <CommentSection 
                    arr={this.state.item.comments} 
                    id={this.state.id}
                    showNewComment={this.state.showNewComment}
                />
            </InstaPost>
        );
    }
};

PostContainer.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    }).isRequired
}

export default PostContainer;