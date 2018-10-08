import React from 'react';
import  './Comment.css';
import CommentContainer from './CommentContainer';
class CommentFooter extends React.Component {

    
    render() {
        return (
            < div  >
            < div className = "comWrap" >
               < input onInput={this.props.commentHandler} className = 'addComment'   placeholder = {" Add a comment "}  />
                <button className="comMenu">...</button>
            </div>
            </div>
        );
    }
}

export default CommentFooter;
