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
            likes:0
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
        console.log(this.state.newComment)
    }
    addNewComment = event => {
        event.preventDefault();
        console.log("this shit")
        // const username="Berto";
        // const text= this.state.newComment;
        this.setState( prevState => {
            return {
                comments:prevState.comments.concat({
                    username:"Berto",                    
                    text:this.state.newComment,
                }),
                newComment: "",
            }
        },
        )
    }

    miLikey = event => {
        this.setState({likes: this.state.likes +1})
    }

    render(){
        return(
            <div className="comment-section">
            <i onClick={this.miLikey} className="far fa-heart icon"></i>
            <i className="far fa-comment icon comment"></i>
            <p className="likes"><strong>{this.state.likes} likes</strong></p>
            
            {this.state.comments.map(item =>{
                return(
                    <Comment key={item.text} comUserName={item.username} comText={item.text} />
                )
            })}
            <p className="timestamp">{moment().startOf('hour').fromNow() }</p>
            <form onSubmit={this.addNewComment}><input onChange={this.changeHandler}  className="comment-input" placeholder=" &nbsp; Add Comment..."></input></form>
            <p className="ellipise"> <i className="fas fa-ellipsis-h icon"></i></p>
            </div>
        )
    }
}

export default CommentSection;