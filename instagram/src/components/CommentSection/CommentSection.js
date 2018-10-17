import React from 'react';
import PropTypes from 'prop-types';
import Comments from './comments';
import AddComment from './AddComment';



class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments : this.props.comments,
            idx: this.props.idx,
            newComment: ""
        }
    }

    // componentDidMount(){
    //     this.setState({ comments: this.props.comments});
    // }

    changeHandler = event => {
        this.setState({[event.target.name] : event.target.value});
    }
    
    addComment = event => {
        console.log(event.target);
    }

    render(){
        console.log(this.state.idx, this.state.comments)
        return(
           <div>
               {this.state.comments.map((comment, idx) =>{
                   return(
                       <Comments comment={comment} key={idx}/>
                   );
               })}
               <div>
                    <AddComment changeHandler={this.changeHandler} newComment={this.state.newComment} />
               </div>
           </div>
           
        )
    }
}

export default CommentSection;


CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
}