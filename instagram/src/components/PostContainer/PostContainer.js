import React, {Component} from 'react'
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            imageUrl: props.imageUrl,
            likes: props.likes,
            thumbnailUrl: props.thumbnailUrl,
            timestamp: props.timestamp,
            username: props.username,
        }
    }
    render() {
        return (
            <div>
                <img alt="" src={this.state.imageUrl}/>
                <img alt=""/>
                <CommentSection />
            </div>
        )
    }
}
export default PostContainer;