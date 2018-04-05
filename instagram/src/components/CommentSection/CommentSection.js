import React, { Component } from 'react';

class CommentSection extends Component {
    getComment() {
        return this.props.comments.map((comment) => < Comment{... comment}/>);
    };  

    render() {
        return (
            <div className= 'CommentSection'>
                {this.getComment()}
            </div>
            );
        }
    }

function Comment(props) {
    return(
        <div className=''>
            <div className='CommentSection__username'>{props.username} </div>
            {props.text}
        </div>
    );
}

export default CommentSection;