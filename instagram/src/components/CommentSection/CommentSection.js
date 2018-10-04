import React from 'react';

import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    render() {
        return ( 
            <div>
                {this.state.comments.map((comment, index) =>
                    <Comment 
                    key={index}
                    comment={comment}
                    />
                    )}
            </div>
        ); 
    }
}

export default CommentSection;