import React from 'react';
import Comment from './Comment';

import CommentInput from './CommentInput';


class CommentContainer extends React.Component{
    constructor(props){
        super(props);
            this.state = {
            comments: props.comments
        }
    }
        //--- forgot syntax, look up
    //changeTheComment -function to handle changes takes in event returns this.setState ({comment: e.target.value})
    // submitNewCommint adding a comment funtion, handles submission, use slice on the default this.state.comment, and than comments.push(thenewcomment);, than reset this.setstate({comments, comment: ""})
    render(){
        return(
            <div className="comments">
                {this.state.comments.map(function mapping c, i to comment key i, comment c)}
            
                // <NewComment comment={this.state.comment}/>
           

                change={this.handlethechanges}
                submit={this.handleTheSubmission}
                />

            
            
            </div>
        )
    }
}

CommentContainer.PropTypes = {
    comments: propTypes.array (
        //shape of pryptypes text:proptypes.string username: PropTypes.string --- forgot syntax, look up later
    )
}


export default CommentContainer;