class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const text = findDOMNode(this.refs.commentInput).value;
        const newComment = {
            username: 'Sean',
            text
        };
        this.setState({
            comments: [...this.state.comments, newComment]
        });
        findDOMNode(this.refs.commentInput).value = '';
    };

    render() {
        return (
            <div className="comment-section">
                {this.state.comments.map((comment, i) =>
                    <div className="comment">
                        <div className="comment-user">{comment.username}</div>
                        <div className="comment-text">{comment.text}</div>
                    </div>
                )}
                 <div className="comment-input">
                    <input type="text" placeholder="..." ref="commentInput" />
                        {' '}
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
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

