import React from 'react';
import heart from './love.png';
import comBubble from './comment.png';

const CommentSection = () => {
    return (
        <div className="commentDiv">
            <div>
                <img className="image" alt="" src={heart} />
                <img className="image" alt="" src={comBubble} />
            </div>
            {/* <p>{this.state.likes} likes</p> */}
            {/* <div>
                {props.todos.map(todo => {
                    return <Todo completeTodo={props.completeTodo} todo={todo} />;
                })}
            </div>
            <p><b>{this.state.user}</b> {this.state.comment}</p> */}
        </div>
    )
}

export default CommentSection;