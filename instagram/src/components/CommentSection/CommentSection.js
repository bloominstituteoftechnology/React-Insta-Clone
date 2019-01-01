// import React from "react";
import React, { Component } from 'react';
import PropTypes from "prop-types";
import Comment from './Comment'
import './CommentSection.css'

//  Initial functional component used
// const CommentSection = props => {
//     // console.log("CommentSection: ", props.comments)
//     return (
//         <div className='comment-section'> 
//             <img src={props.data.imageUrl} alt='post image' />
//             <p className='likes'>{props.data.likes} likes</p>
//             {props.comments.map(comment => (
//                 <Comment username={comment.username}
//                          text={comment.text}
//                          key={comment.text}
//                 />
//             ))}
//             <input type="text" value="Add a comment..." className='input'/>
//         </div>
//     )
// }

class CommentSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: props.comments,
            data: props.data,
        }
    }

    render(){
        console.log(this.state.data)
        console.log(this.state.comments)
        return (
            <div className='comment-section'> 
                <img src={this.state.data.imageUrl} alt='post image' />
                <p className='likes'>{this.state.data.likes} likes</p>
                {this.state.comments.map(comment => (
                    <Comment username={comment.username}
                             text={comment.text}
                             key={comment.text}
                    />
                ))}
                <input type="text" value="Add a comment..." className='input'/>
            </div>
        )
    }

}

/*

Lets divide up the data that we've been working with this 
far by separating the comments array onto a new component's
state. Pass down the comments through each post to the 
CommentSection component. Be sure that you set the 
incoming comments props data on the state of the 
CommentSection component.

*/

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;
