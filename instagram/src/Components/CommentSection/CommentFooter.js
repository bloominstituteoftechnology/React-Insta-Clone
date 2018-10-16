import React from 'react';
import  './Comment.css';
class CommentFooter extends React.Component {

    
    render() {
        const addComment = (e) => {
                const comment = e.target.value;
                this.props.commentHandler(comment);
            }

        return (
            <div>
            <div className= "comWrap" >
               <input type='text' onChange={addComment} className='addComment'  placeholder = {" Add a comment "}  />
                <button onClick={this.props.subComment} className="comMenu">...</button>
            </div>
            </div>
        );
    }
}

export default CommentFooter;
