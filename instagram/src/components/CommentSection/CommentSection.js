import React from 'react';
import './CommentSection.css'; 
import PropTypes from 'prop-types'; 
import Comments from './Comments'; 
import * as moment from 'moment'; 

class CommentSection extends React.Component {
    constructor(props){
        super(props); 
        this.state = {comments: [], cmdCalled: false}; 
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

    
    }
    

    render(){
        let comments;
        this.state.cmdCalled ? comments = this.state.comments : comments = [];

        const time = moment(this.props.time, 'MMMM Do YYYY, h:mm:ss a').fromNow()
        
        return(

            <div>
                {comments.map((comment, i) => <Comments key={i}userName = {comment.username} text = {comment.text}/>)}
                
                <h4 className = "timeStamp">{time}</h4>
                <hr className ="postHrLine"/>
                <div className = "addComment">
                  <input className ="addCommentInput" onChange = {this.handleOnChange} onKeyUp = {this.addNewComment} placeholder = "Add a comment..."/>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                
            </div>
            
            
        );
    }
}



CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection; 