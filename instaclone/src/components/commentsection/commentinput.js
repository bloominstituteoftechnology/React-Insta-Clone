import React from 'react';

let CommentInput = props => {
    return (
        <form>
            <input type="text" placeholder="Add comment... " />
        </form>
    );
};

addNewComment = (event, index) => {
    let data = [this.state.data];

    let dataObj = {...data[index]};

    dataObj.comments.push({
        username:'Guest',
        text: `{event.target.value}`
    });

    this.setState({
        data:data
    });
}



export default CommentInput;