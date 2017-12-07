import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            likes: 0,
            image: '',
            thumbnail: '',
            username: '',
            heartToggle: false,
        }
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            likes: this.props.datum.likes,
            image: this.props.datum.imageUrl,
            thumbnail: this.props.datum.thumbnailUrl,
            username: this.props.datum.username,
        })
        
    }

    heartToggle = (evt) => {
        const copyOfHeart = this.state.heartToggle;
        const copyOfLikes = this.state.likes;
        if (!copyOfHeart) {
            this.setState({likes: copyOfLikes+1});      
        } else {
            this.setState({likes: copyOfLikes-1});      
        }
        this.setState({heartToggle: !copyOfHeart});
    }
    heartShow = () => {
        let retVar;
        if (this.state.heartToggle === false) {
            retVar='./assets/heart.png';
        } else {
            retVar='./assets/heart-red.png'
        }
        return <img src={retVar} alt="Like Icon" onClick={this.heartToggle}/>
    }

    focusCommentBox = (evt) => {
        document.getElementById(`commentBox__${this.state.id}`).focus(); // When comment icon clicked: Focus the Textbox corresponding to ID of Parent on children
        this.refs.comments.handleReturn(evt); // Call Handle Return on Child TextBox
    }

    render() {
        return (
            <div className="Post">
                <div className="Post__Header">
                    <img src={this.state.thumbnail} alt="User Thumbnail"/>
                    <h3>{this.state.username}</h3>
                </div>
                <div className="Post__Main">
                    <img className="Post__Image" src={this.state.image} alt="Main Post"/>
                </div>
                <div className="Post__Interact">
                    <this.heartShow/>
                    <img src="./assets/comment.png" alt="Comment Icon" onClick={this.focusCommentBox}/>
                </div>
                <div className="Post__Likes">
                    {this.state.likes} likes
                </div>
                    <CommentSection comments={this.props.datum.comments} date={this.props.datum.timestamp} ref="comments" id={this.props.id}/>
            </div>
        );
    }
}

export default PostContainer;