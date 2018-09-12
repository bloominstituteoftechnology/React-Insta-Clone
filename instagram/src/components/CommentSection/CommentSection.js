import React, { Component } from 'react';
import dummyData from '../../dummy-data';

class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state={
            comments: dummyData.comments,
            commentInput: ''
        }
    }



    render() { 
       
        return (  

            console.log(this.state.comments)

        );
    }
}
 
export default CommentSection;