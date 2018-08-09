import React from 'react';

let CommentInput = props => {
    return (
        <form onSubmit={props.submitComment}>
            <input type="text" value={props.comment} placeholder="Add comment... " onChange={props.changeComment}
            />
        </form>
    );
};

//addNewComment = (event, index) => {
//    let data = [this.state.data];
//
//    let dataObj = {...data[index]};
//
//    dataObj.comments.push({
//        username:'Guest',
//        text: `{event.target.value}`
//    });
//
//    this.setState({
//        data:data
//    });
//}



export default CommentInput;