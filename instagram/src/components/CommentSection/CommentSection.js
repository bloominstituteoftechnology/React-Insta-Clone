import React from 'react'
import Comment from '../CommentSection/Comment';
import './commentSection.css';
class CommentSection extends React.Component {

    render() {
        return (
            <div className="commentSection">
                <>
                    {this.props.CommentArray.map((obj,index) => {
                        return (

                            <Comment key={index} commentUsername={obj.username} commentText={obj.text}/>

                        );
                    })}
                </>
                <div className="addComment">
                    <div className="addCommentText"><p>Add a comment...</p></div>
                    <div className='dots'><p>...</p></div>
                </div>
            </div>
        );
    }
}

export default CommentSection