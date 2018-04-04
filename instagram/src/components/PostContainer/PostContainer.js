import React, { Components } from 'react';


class PostContainer extends Components {
    constructor() {
        super();
        this.state = {
            username: this.username,
            thumbnailUrl: this.thumbnailUrl,
            imageUrl: this.imageUrl,
            likes: this.likes,
            timestamp: this.timestamp,
            comments: [
                {
                    username: this.username,
                    text: this.text,
                }
            ]
        }
    }

    render() {
        return (
            <div className = 'PostContainer'>
            
            </div>
        )
    }
}

export default PostContainer;

