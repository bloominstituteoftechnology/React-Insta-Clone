import React from 'react'
import './CommentSection.css';


class CommentSection extends React.Component {


    render() {
        return (
            <div className='comment-sec'>
                {this.props.comments.map((comment) => {
                    return (
                        <>
                        <h3>{comment.username}</h3>
                            <p>{comment.text}</p>
                        </>
                    );
                })
                }
          </div>
        );
    };
}

export default CommentSection;
