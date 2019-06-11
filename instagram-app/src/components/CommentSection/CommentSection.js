import React from 'react'



class CommentSection extends React.Component {


    render() {
        return (
            <div>
                {this.props.comments.map((comment, index) => {
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
