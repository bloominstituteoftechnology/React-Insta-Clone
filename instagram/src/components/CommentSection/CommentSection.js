import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Comment from './Comment'
import './CommentSection.css'

class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state={
            comments: props.comments,
            commentInput: ''
        }
        
    }

    // componentDidMount(){
    //     this.setState({comments: props.comments});
    // }



    render() { 
       
        return (  
                <div className='commnet-section-instances'>
                {this.state.comments.map(comment => <Comment key={comment.username} comment={comment}/>)}
                
                </div>

        );
    }
}


CommentSection.propType = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}


 
export default CommentSection;