import React, { Component } from 'react';
import './PostContainer.css';


class Post extends Component {
    
    render() { 
        return ( 
            <div className="post">
                <div className="post-header">
                    <img className="thumbnail" src={this.props.thumbnailUrl} alt=""></img>
                    {this.props.username}
                </div>
                
                <div className="post-body">
                    <img className="post-image" src={this.props.imageUrl}/>
                        <div className="comment-icons">
                            <div><i className="far fa-heart fa-3x" onClick={this.props.increaseLike}></i></div>
                            <div><i className="far fa-comment fa-flip-horizontal fa-3x"></i></div>
                        </div>
                        <div className="likes">{this.props.likes} likes</div>
                </div>
                
            </div>
         );
    }
}
 
export default Post;