import React, { Component } from 'react';
import './CommentSection.css';
class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            newComment: ''
        };
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments
        });
    }

    addComment = (e) => {
        e.preventDefault();
        const commentObj = {
            username: 'Franz',
            text: this.state.newComment
        };
        this.setState({
            comments: [...this.state.comments, commentObj],
            newComment: ''
        });
    }

    handleCommentInput = (e) => {
        this.setState({ newComment: e.target.value });
    }

    render() {
        return (
            <div className="comment-section">
                {this.state.comments? this.state.comments.map((comment, i) => ( 
                    <div className="comment" key={i}>
                        <div className="comment-user"><b>{comment.username}</b></div>
                        <div className="comment-text">{comment.text}</div>
                    </div>)
                ) : null}
                 <div className="comment-input">
                    <input type="text" placeholder="..." value={this.state.newComment} onChange={this.handleCommentInput} />
                    <button type="submit" onClick={this.addComment}>Submit</button>
                </div>
            </div>
        );
    }
}

export default CommentSection;
//first try
// import React from 'react';
// import '../styles/CommentSection.css';
// import React, { Component } from 'react';
// import React, { Component } from 'react';
  
// class ComponentDidMountExample extends Component {
//   constructor() {
//     super();
//     this.state = {
//       thing: {}
//     };
//   }

//   componentDidMount() {
//     this.setState({ thing: this.props.data });
//   }
//   _handleKeyDown(event) {
//     if (event.which === 13 && this.state.commentBody.trim().length > 0) {
//       this.props.onSubmit(this.state.commentBody);
//       this.setState({ commentBody: '' });
//       this.commentInput.blur()
//     }
//   }
//   render() {
//     return (
//       <div className="stuff">
//         {`Prop data that got passed down:`}
//         <input className="CommentSection__input" type="text" placeholder="Add a comment..." value={this.state.commentBody} onChange={this.onCommentChange}
//             onKeyDown={this.handleKeyDown} ref={(ref) => {this.commentInput = ref}} />
//         {this.state.thing ? 
//           <div className="thing">
//             <div className="thing-one">{this.state.thing.one}</div>
//             <div className="thing-two">{this.state.thing.two}</div>
//             </div> : null
//           }
//         </div>
//       );
//     }
//   }
// export default ComponentDidMountExample;
// import React, { Component } from 'react';
// import { findDOMNode } from 'react-dom';

