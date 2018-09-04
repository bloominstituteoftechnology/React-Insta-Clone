import React from 'react';

class PostFooter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes : props.likes
        }
    }

    render(){
        return (
            <div className = 'post-footer'>
            <span>HEART COMMENT</span>
            <span className = 'likes'>{this.state.likes} likes</span>   
            </div>
        )
    }
}

export default PostFooter;