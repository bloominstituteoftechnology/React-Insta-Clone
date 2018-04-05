import React from 'react'
import './CommentSection.css'
export default class CommentSection extends React.Component {


    getComment() {
        return this.props.comments.map((comment)  => <Comment {...comment}/>);
    }

    render() {
        return (
            <div className='CommentSection'>
                {this.getComment()};
            </div>
        );
    }

}

function Comment(props) {
    return(
        <div className='CommentSection__comment'>
            <span className='CommentSection__username'>{props.username} </span>
            {props.text}
        </div>
    );
}
