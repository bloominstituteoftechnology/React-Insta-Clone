import React, {Component} from 'react'
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.postData,
        }
    }
    render() {
        return (
            <div>
                <img alt="" src={this.state.data.imageUrl}/>
                <img alt="" src={this.state.data.thumbnailUrl}/>
                <CommentSection likes={this.state.data.likes} comments={this.state.data.comments}/>
            </div>
        )
    }
}
export default PostContainer;