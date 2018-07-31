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
            {this.state.comments.map}((c, i) => <Comment key={i} comment={c} />)}
            <form>
            <input type="text" placeholder="Add a comment"></input>
            </form>
          </div>
        );
    }
}

export default CommentSection;