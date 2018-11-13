import React from 'react';
import "./CommentSection.css"
import Comments from './Comments'

const addNewComment = (event,props) => {
    event.preventDefault();
    console.log("hello")
    // let newData = this.state.data;
    // newData[props.index].comments.pop("New comment")
    this.setState({
        comments: [...props,{username:"Dan",text:"Hey"}]
    })
};

const CommentSection = props => {
    this.setState({
        comments:props
    })
    return(
        <div>
            {
            props.comments.map((e,index) => (
                <div key={index}>
                    <Comments  username={e.username} text={e.text}/>
                </div>
            ))
            }

            <form action="">
                <input type="text" placeholder="Add comment" onChange={addNewComment}></input>
            </form>
        </div>
    );
}

export default CommentSection;