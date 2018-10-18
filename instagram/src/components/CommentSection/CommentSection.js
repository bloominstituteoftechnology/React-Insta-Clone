import React from 'react';
import PropTypes from 'prop-types';
import Comments from './comments';
import AddComment from './AddComment';



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
        this.setState({comments: this.props.comments});
    }

    changeHandler = event => {
        this.setState({[event.target.name] : event.target.value});
    }

    addComment = event => {
        event.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments,
                {username: "test_username", text: this.state.newComment}
            ],
            newComment: ""
        })
    }

    render(){
       
        return(
           <div>
               {this.state.comments.map((comment, idx) =>{
                   return(
                       <Comments comment={comment} key={idx}/>
                   );
               })}
               <div>
                    <AddComment addComment={this.addComment} changeHandler={this.changeHandler} newComment={this.state.newComment} />
               </div>
           </div>
           
        )
    }
}

export default CommentSection;


CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
}