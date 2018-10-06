import React, {Component} from 'react';
import './CommentSection.css';
import Comment from './Comment.js'
import NewComment from './NewComment.js';
import Buttons from './Buttons.js';

class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: props.postData.likes
        }
   }
   
    addLike = (event) => {
        event.preventDefault();
        console.log(this.state.likes)
        this.setState(prevState => ({ likes: prevState.likes + 1 }));
    }
    
    render() {
        return (
            <div>
                <Buttons likes={this.state.likes} addLike={this.addLike} />
                {this.props.postData.comments.map((comment) => {
                    return (
                        <Comment comment={comment} key={Math.random()} />
                    )
                })}
                <div className='timestamp'>{this.props.postData.timestamp}</div>
                <NewComment />
            </div>
        )
    }
}    

export default CommentSection;