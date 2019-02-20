import React from "react"
import SingleComment from "./SingleComment"
import "./head.css"
import Form from "./Form"
import PropTypes from "prop-types";
class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : props.likes,
            comments : [],
            commentInput : " "
        }
    }

    componentDidMount () {
        this.setState({
            comments : this.props.comments
        })
    }

    addCountHandler = ()=>{
        this.setState(prevState=>{
            return {
                count : prevState.count+1
            }
        })
    }

    changeHandler = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addCommentHandler = e =>{
        e.preventDefault();
        
        const newComments ={
            username : "Jay",
            text : this.state.commentInput
        }
        this.setState({
            comments : [...this.state.comments,newComments],
            commentInput : " "
        })
        
    }

 
  
    render (){
    return (
        <div className="commentaire">
        <h4>{this.state.count} Likes</h4>
        <div className="icon">
            <i onClick={this.addCountHandler} className="heart outline icon"></i>
            <i  className="comments outline icon"></i>
         </div>
            {this.state.comments.map(elem=>
                <div className="user-section">
                <SingleComment key={elem.text}username={elem.username} text={elem.text} />
                </div>)
            }
            <Form  changeHandler={this.changeHandler} 
            commentInput={this.state.commentInput} 
            addCommentHandler = {this.addCommentHandler}
           
            />
        </div>
       

    )
            }
}

export default Comment;

Comment.propTypes = {
    username : PropTypes.string,
    text:PropTypes.string.isRequired
}

Comment.defaultProps = {
    text : "This text Will be generated if no text is given",
    username :"An anonymous username"
}