import React from "react"
import "./head.css"
import Form from "./Form"
import PropTypes from "prop-types";
class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    addCountHandler = ()=>{
        this.setState(prevState=>{
            return {
                count : prevState.count+1
            }
        })
    }

  
    render (){
    return (
        <div className="commentaire">
        <h4>{this.state.count} Likes</h4>
        <div className="icon">
            <i onClick={this.addCountHandler} className="heart outline icon"></i>
            <i  class="comments outline icon"></i>
         </div>
            {this.props.comments.map(elem=>
                <div className="user-section">
                <h5>{elem.username}</h5>
                <p className="text">{elem.text}</p>
                </div>)}

                <Form />
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