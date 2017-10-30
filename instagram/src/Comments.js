import React, { Component }  from 'react';
import './Comments.css';

class CommentsComponent extends Component {
    constructor(props) {
        super();
        this.state = { comments : [] };
    }
    componentDidMount() {
        this.setState({ 
            comments: this.props.comments
        });
    }
    render() {
        return (<div> { this.state.comments.map((comment, i) => {
            return <p className="comments" key={i}>
                      <span className="comment-username">
                         {comment.username}
                      </span> {comment.text}
                   </p>;
        } )}</div>);
    }
};

export default CommentsComponent;