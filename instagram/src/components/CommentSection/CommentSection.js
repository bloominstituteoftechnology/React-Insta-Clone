import React from 'react';
import PropTypes from 'prop-types';
import Comments from './comments';
import AddComment from './AddComment';
import TimeStamp from './TimeStamp';



class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments : [],
            idx: this.props.idx,
            newComment: "",
        }
    }

    componentDidMount(){
        this.setState({comments: this.props.usrData.comments});
    }

    changeHandler = event => {
        this.setState({[event.target.name] : event.target.value});
    }

    addComment = event => {
        event.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments,
                {username: this.props.usrData.username, text: this.state.newComment}
            ],
            newComment: ""
        }) 
       
    }

    render(){
        return(
           <div className="comment-box">
               {this.state.comments.map((comment, idx) =>{
                   return(
                       <Comments comment={comment} key={idx}/>
                   );
               })}

               <TimeStamp timestamp = {this.props.usrData.timestamp}/>
                <div className="add-comment-container">
                    <AddComment addComment={this.addComment} changeHandler={this.changeHandler} newComment={this.state.newComment} />
                </div>
           </div>
           
        )
    }
}

export default CommentSection;


// CommentSection.propTypes = {
//     comments: PropTypes.array.isRequired
// }