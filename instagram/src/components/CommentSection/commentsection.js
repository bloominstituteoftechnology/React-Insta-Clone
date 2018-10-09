import React from 'react';

import Comments from './comments';


class CommentSection extends React.Component{
    constructor(props){
        super(props)
        this.state={
            allComments: props.comments,
        }
        console.log(this.state);
    }


    render(){
        return(
            <div>
                {this.state.allComments.map((comment, index) => <Comments key= {index} comments={comment} />)}
            </div>
        );
    }
}


export default CommentSection;