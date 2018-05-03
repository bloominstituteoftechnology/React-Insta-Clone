import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends Component{
    constructor(){
        super();
        this.state = {
            stuff: []
        }
    }

    componentWillMount(){
        // console.log("testing props", this.props.comments);
        
        this.setState({ 
            stuff: this.props.comments.props.comments
        });
    }
    

    render(){
        console.log("testing render", this.state)
        return (
            <div className="comment-section">
               {
                   this.state.stuff.map((comment, index)=>{
                        return (<div key={index}>
                            {`${comment.username}: ${comment.text}`}
                        </div>)
               })}  <button name="test" onClick={()=> { 
                   this.state.stuff.push( {username: "Obo", text: "Testing"})
                   this.forceUpdate()
                   }} >Click Me</button>
            </div>
        )
    }   
}
export default CommentSection;