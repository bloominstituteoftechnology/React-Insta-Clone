import React from 'react';
import './commentSection.css';

const CommentSection =(props) => {
//   console.log(props.comments);
  const comments = props.comments.map((ele, index)=> (<p key={index}>{ele.text} </p>))
    return (
      <div className="comments">
        {comments}
        <input
        type='text'
        placeholder='add comment here...'
        onChange ={props.change}
        // onClick ={props.input}
        value={props.input}
        />
        <input type="submit" onClick={props.addinput}/>
      </div>
    );
}

export default CommentSection;
