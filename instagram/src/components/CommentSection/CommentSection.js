import React from 'react';
import './comment-section.css';


class CommentSection extends React.Component {
constructor(props){
    super(props);
    this.state = props;

}

render(){
    return(
        <div className="comment-container">
         {this.state.comments.map(c => (
             <div className="each-comment" key ={c.id}>
                <p className="comment-username">{c.username}</p>
                <p className="comment-text">{c.text}</p>
             </div>
         ))}
        </div>
    )
}
}








export default CommentSection;