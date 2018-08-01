import React, { Component } from 'react';


class Post extends Component {
    
    render() { 
        return ( 
            <div className="post">
                <div className="post-header">
                    {this.props.thumbnailUrl}
                    {this.props.username}
                </div>
                <div className="post-image">
                    {this.props.imageUrl}
                </div>
                
            </div>
         );
    }
}
 
export default Post;