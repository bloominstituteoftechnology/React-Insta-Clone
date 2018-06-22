import React from 'react';
import PropTypes from "prop-types";
import '../CommentSection/commentsstyle.css';
import styled from 'styled-components';

class CommentsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.dummyData,
            input: "",
            placeholder:"Add a Comment...."
        };
    }

    eventHandler = event => {
        this.setState ({
            input: event.target.value, 
            });
    }

    addNewComment = (event, i) => {
        event.preventDefault();
        let comments = this.state.comments.slice();
        comments.push({text: this.state.input, username:'Stickmonster89'});
        this.setState({
            comments, 
            input:"", 
            
    });
        

    }

    render() {
    return (
        <div className="comments">
        {this.state.comments.map(comment => (
            <div className="next" key={Math.random()}>
                <p className="username">{comment.username}</p>
                <p>{comment.text}</p>
            </div>
        ))}
         <div className="inputbottom">
            <form onSubmit={this.addNewComment}>
                <input className="inputtext" type="text" onChange={this.eventHandler} placeholder={this.state.placeholder} value={this.state.input}/>
            </form>
         </div>
        </div>
    
    );
}
}

CommentsSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
        }
)
)
}
 
export default CommentsSection