import React,{Fragment} from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            comments: props.comments,

        }
    }
   addNewComment = event => {
       event.preventDefault();
       this.setState({
           comments:[...this.props.comments, {text:event.target.value, username:this.props.comments.username}]
       })
    }
    render(){
        return (
        <Fragment>
        {this.state.comments.map((comment,i) =>
        <Comment key = {i} comment = {comment} />)
        }
        <form action=""  onSubmit={e => this.addNewComment(e.target.value)}>
        <input type="text" placeholder="Add a comment..."/>
        </form>
        </Fragment>
    );
}
}
CommentSection.propTypes ={
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;