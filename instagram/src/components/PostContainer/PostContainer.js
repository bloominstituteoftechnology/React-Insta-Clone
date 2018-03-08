import React, { Component } from 'react';
import './PostContainer.css';
import { CommentSection } from './components/CommentSection/CommentSection';

class PostContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <div className="Post-Wrapper">
                {this.props.dummyData.map((post => {
                    return (
                        <div key={post.timestamp + post.username}>
                            <p>{post.username}</p>
                            <img src={post.thumbnailUrl} alt="" />
                            <img src={post.imageUrl} alt="" />
                            <p>{post.likes}</p>
                            <p>{post.timestamp}</p>
                            <CommentSection dummyData={this.state.Comments} />
                        </div>
                    )
                }))}
            </div>
        )
    }
};