import React from 'react';
import moment from 'moment';
import './CommentSection.css';
import Comment from './Comment'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments:[],
            newComment: "",
            likes:0,
            liked: false
        }
    }
    componentDidMount(){
        this.setState({
        comments:this.props.comArray, 
        likes:this.props.likes 
        });
    }

    changeHandler = event => {
        this.setState({
            newComment: event.target.value
        })
    }
    addNewComment = event => {
        event.preventDefault();
        const username="Berto";
        const text= this.state.newComment;
        this.setState( {
            comments:[...this.state.comments, {username, text}],
            newComment:""
        },
        )
    }

    miLikey = event => {
        this.setState({liked: !this.state.liked})
    }

    render(){
        return(
            <div className="comment-section">
            <i onClick={this.miLikey} className={this.state.liked ? "fas fa-heart icon" : "far fa-heart icon"}></i>
            <i className="far fa-comment icon comment"></i>
            <p className="likes"><strong>{this.state.liked ? this.state.likes + 1 : this.state.likes} likes</strong></p>
            
            {this.state.comments.map(item =>{
                return(
                    <Comment key={item.text} comUserName={item.username} comText={item.text} />
                )
            })}
            <p className="timestamp">{moment().startOf('hour').fromNow() }</p>
            <div className="add-comment">
            <form onSubmit={this.addNewComment}><input onChange={this.changeHandler} value={this.state.newComment} className="comment-input" placeholder=" &nbsp; Add Comment..."></input></form>
            <p className="ellipise"> <i className="fas fa-ellipsis-h icon"></i></p>
            </div>
            </div>
        )
    }
}

export default CommentSection;