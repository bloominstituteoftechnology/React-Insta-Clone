import React from 'react';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            likes: props.likes
        };
      }
    
render() {
    return (
        <div className='commentSection'>
        <div className='likeAndComment'></div>
        </div>
    )
}
}

export default CommentSection;

