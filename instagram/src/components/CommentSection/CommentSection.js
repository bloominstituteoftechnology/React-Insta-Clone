// import React, { Component } from "react";
// import dots from "../../dots.svg";

// class CommentSection extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             newComm: '',
//             comments: []

//         }

//     }
//     componentDidMount() {
//         this.setState({
//             comments: this.props.comments
//         })
//     }

//     handleAddComment = x => {
//         this.setState({
//             [x.target.name]: x.target.value
//         })
//     }

//     handleSubmitComment = () => {
//         const { comments } = this.state;
//         comments.push({
//             username: 'Joe_Dirt',
//             text: this.state.newComm
//         })
//         this.setState({
//             comments, newComm: ""
//         })
//     }
//     render() {
//         return(
//         <div>
//            {this.props.comments.map(comment => (
//                <div className = "comments">
//                    <div className="commentsUser">{comment.username} <span className="commentsText">{comment.text}</span></div>
//                </div>
//            ))}

//            <div className="commentsTime">{this.props.time}</div>
//            <div className = "commentBorder"></div>
//            <div className="commentInputContainer">
//            <input className="commentInput" type="text" name="newComment" onChange={this.handleAddComment} value={this.state.newComm} placeholder="Add your comments...."/>
//            <button className="commentButton" onClick={this.handleSubmitComment}>Add</button>
//            <img src={dots} className="commentDots"/>
//            </div>
//         </div>
//         )
//     }
// }
// export default CommentSection;