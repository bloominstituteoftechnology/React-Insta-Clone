import React from 'react';
import PropTypes from 'prop-types';
import Comments from './comments';



class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments : this.props.comments
        }
    }

    // componentDidMount(){
    //     this.setState({ comments: this.props.comments});
    // }

    addComment = event => {
        console.log(event);
    }

    render(){
        console.log(this.state.comments)
        return(
           <div>
               {this.state.comments.map((comment, idx) =>{
                   return(
                       <Comments comment={comment} key={idx} addComment={this.addComment}/>
                   );
               })}
           </div>
        )
    }
}

export default CommentSection;


CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
}