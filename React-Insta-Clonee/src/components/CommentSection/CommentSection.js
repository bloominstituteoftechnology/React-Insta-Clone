import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            comments: props.comments,
            timestamp: props.timestamp
        }
    }
    render() {
        return (
            <div>
                {this.state.comments.map(e=><Comment data={e} key={e.text}/>)}
                <p className='time-stamp'>{this.state.timestamp}</p>
                <div className='rule'></div>
                <div className='input-comment'>
                <input className='comment-input' type='text' placeholder='Add a comment...'/><i className="dot fas fa-ellipsis-h"></i>
                </div>
            </div>
       
    )
}


}
 export default CommentSection; 