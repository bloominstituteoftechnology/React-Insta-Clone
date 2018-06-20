import React, { Component } from 'react';
import dummyData from '../../dummy-data.js';
import './Post.css';
import Post from './Post';
import CommentSection from '../Comment/CommentSection.js';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            username: "",
            thumbnailUrl: "",
            imageUrl: "",
            likes: 0,
            timestamp: "",
            comments: []
        };
    }

    componentDidMount() {
        this.setState({ 
            id: this.props.id,
            username: this.props.username,
            thumbnailUrl: this.props.thumbnailUrl,
            imageUrl: this.props.imageUrl,
            likes: this.props.likes,
            timestamp: this.props.timestamp,
            comments: this.props.comments 
        });

    }

render() {
    return (
    <div className="post-container">
        <div className="post-header">
                    <img src={this.state.thumbnail} alt="User Thumbnail"/>
                    <h1>{this.state.username}</h1>
                </div>
                <div className="post-main">
                    <img className="post-image" src={this.state.image} alt="Main Post"/>
                </div>
                
                <div className="post-likes">
                    {this.state.likes} likes
                </div>
                    <CommentSection comments={this.props.comments} date={this.props.timestamp} id={this.props.id}/>
            </div>
        );
    };
 }

export default PostContainer;