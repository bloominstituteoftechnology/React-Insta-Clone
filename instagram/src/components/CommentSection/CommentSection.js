import React from 'react';
import Dots from "../../dots.svg";

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: [],
            newComm: ''

        }

    }
    componentDidMount() {
        this.setState({
            comment: this.prop.comment
        })
    }

    handleAddComment = x => {
        this.setState({
            [x.target.name]: x.target.value
        })
    }

    handleSubmitComment = () => {
        const comment = this.state;
        comment.push({
            user: 'Joe_Dirt',
            text: this.state.newComm
        })
        this.setState({
            comment, newComm: ""
        })
    }
    render() {
        return(
        <div>
           {this.props.comment.map(comment => (
               <div className = "comments">
                   <div className="commentsUser">{comment.username} <span className="commentsText">{comment.text}</span></div>
               </div>
           ))}

           <div className="commentsTime">{this.props.time}</div>
           <div className = "commentBorder"></div>
           <div className="commentInputContainer">
           <input className="commentInput" type="text" name="newComment" onChange={this.handleAddComment} value={this.state.newComm} placeholder="Add a comment...."/>
           <button className="commentButton" onClick={this.handleSubmitComment}>Add</button>
           <img src={Dots} className="commentDots"/>
           </div>
        </div>
        )
    }
}
export default CommentSection;