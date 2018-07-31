import React from 'react';
import './CommentSection.css'; 
import PropTypes from 'prop-types'; 
import Comments from './Comments'; 
import * as moment from 'moment'; 

class CommentSection extends React.Component {
    constructor(props){
        super(props); 
        this.state = {comments: [], cmdCalled: false, placeholder: this.props.placeholder}; 
    }

    componentDidMount () {
        this.setState({comments:this.props.comments, cmdCalled: true, temp: ""});
      }

    
    handleOnChange = event => {
        this.setState({
            temp: event.target.value
        })
        console.log(this.state.temp);
    }

    handleChange = event => {
        this.setState(
          {temp: event.target.value}
        )
        console.log(event.target.value);
      }
    addNewComment = event => {
        const text = this.state.temp;
        const comments = this.state.comments; 

        if(event.keyCode === 13 ){ 
            comments.push({username: "you", text:text})
            this.setState({comments: comments, temp:""});
        }

        console.log(event.target.placeholder);
        if(event.target.innerHTML === "Submit" && text.length > 0){
            comments.push({username: "you", text:text})
            this.setState({comments: comments, temp:""});
        }

    
    }

    handleOnSubmit = event => {
        event.preventDefault(); 
    }
    

    render(){
        let comments;
        this.state.cmdCalled ? comments = this.state.comments : comments = [];

        const time = moment(this.props.time, 'MMMM Do YYYY, h:mm:ss a').fromNow()
        
        const value = this.state.temp;
        return(

            <div>
                {comments.map((comment, i) => <Comments key={i}userName = {comment.username} text = {comment.text}/>)}
                
                <h4 className = "timeStamp">{time}</h4>
                <hr className ="postHrLine"/>
                <div className = "addComment">
                  <form onSubmit ={this.handleOnSubmit}>      
                    <input className ="addCommentInput"  onChange = {this.handleOnChange} onKeyUp = {this.addNewComment} placeholder = "Add a comment..."/>
                    <i onClick= {this.addNewComment} className="fas fa-ellipsis-h">Submit</i>
                 </form>
                </div>
                
            </div>
            
            
        );
    }
}



CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection; 