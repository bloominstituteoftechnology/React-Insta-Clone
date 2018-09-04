import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import './CommentSection.css';
import AddCommentBar from './AddCommentBar.js';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            comments: props.comments,
            timestamp: props.timestamp,
            newComment: ''
        }
    }

    addNewComment=(e,index)=>{
        const commentsCopy=this.state.comments.slice();
        commentsCopy[index]=({
            username: 'Smitty',
            text: this.state.newComment
        });
        this.setState({comments: commentsCopy,newComment:''});
    }
    handleInputChange=(e)=>{
        this.setState({newComment:e.target.value});
    }

    render() {
        return (
            <div>
                {this.state.comments.map((e,i)=><Comment data={e} key={i}/>)}
                <p className='time-stamp'>{this.state.timestamp}</p>
                <div className='rule'></div>
                <AddCommentBar value={this.state.newComment} inputHelper={this.handleInputChange} handleInputSubmit={this.addNewComment} length={this.state.comments.length}/>
            </div>
       
    )
  }
}
CommentSection.propTypes={
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    timestamp: PropTypes.string.isRequired
}
 export default CommentSection; 