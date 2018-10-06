import React, {Component} from 'react';
import './CommentSection.css';
import Comment from './Comment.js'
import NewComment from './NewComment.js';
import Buttons from './Buttons.js';

class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: props.postData.likes,
            comment: [],
        }
    }
   
    componentDidMount() {
        setTimeout(() => {
            this.setState({comment: this.props.postData.comments})
        }, 500)
    }
   
    addNewComment = (event, index) => {
        event.preventDefault();
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
                {this.state.comment.map((comment) => {
                    return (
                        <Comment comment={comment} key={Math.random()} />
                    )
                })}
                <div className='timestamp'>{this.props.postData.timestamp}</div>
                <NewComment newComment={this.addNewComment} />
            </div>
        )
    }
}    

export default CommentSection;