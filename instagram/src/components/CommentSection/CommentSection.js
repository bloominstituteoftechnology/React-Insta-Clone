import React, { Component } from 'react';
// import dummyData from '../../dummy-data.js';

class CommentSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            myComments: props.myComments,
        };
    }
    render() {
        console.log("Is This Working?");
        return(
          <div>
            {this.state.myComments.map(MyData => (
            <div className="Comment__Body d-flex">
                <div className="Comment__Username font-weight-bold">
                    {MyData.username}
                </div>
                <div className="Comment__Text">
                    {MyData.text}
                </div>
            </div>
                
            ))}
          </div>
        )
    }
}

export default CommentSection;