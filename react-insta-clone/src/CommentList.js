import React, { Component } from 'react';
import './CommentList.css';

// export const CommentList = props => {
//     return (
//     <div className="Comments">
//         {props.comments.map((aComment, index) => (
//             <div key={index} className="Comment">
//                 <span className="Comment__Username">{aComment.username}</span>
//                 <span className="Comment__Text">{aComment.text}</span>
//             </div>
//         ))}
//         <form className="AddComment">
//             <input className="AddComment__Text" placeholder="Add a comment..."></input>
//         </form>
//     </div>
//     );
// };

class CommentList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Comments: this.props.comments
      };
    };
  
    componentDidMount() {
      this.setState({ Comments: this.props.comments });
    }
  
    render() {
        return (
            <div className="Comments">
                {this.props.comments.map((aComment, index) => (
                    <div key={index} className="Comment">
                        <span className="Comment__Username">{aComment.username}</span>
                        <span className="Comment__Text">{aComment.text}</span>
                    </div>
                ))}
                <form className="AddComment">
                    <input id="NewComment" className="AddComment__Text" placeholder="Add a comment..."></input>
                    <button className="AddComment__Button" onClick={this.AddComment}>Submit</button>
                </form>
            </div>
        );
    }
  }

  export default CommentList;