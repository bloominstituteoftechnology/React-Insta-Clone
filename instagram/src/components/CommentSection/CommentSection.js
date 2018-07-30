import React from 'react';
import './CommentSection.css'; 
import PropTypes from 'prop-types'; 
import Comments from './Comments'; 


class CommentSection extends React.Component {
    constructor(props){
        super(props); 
        this.state = {}; 
    }

    render(){
        const comments = this.props.comments;   

        return(

            <div>
                {comments.map((comment, i) => <Comments userName = {comment.username} text = {comment.text}/>)}
            </div>
            
            
        );
    }
}

export default CommentSection; 