import React from 'react'
import Comment from '../CommentSection/Comment';
class CommentSection extends React.Component {

    render() {
        return (
            <div className="commentSection">
                <>
                    {this.props.CommentArray.map(obj => {
                        return (

                            <Comment key={this.props.key} commentUsername={obj.username} commentText={obj.text}/>

                        );
                    })}
                </>
            </div>
        );
    }
}

export default CommentSection