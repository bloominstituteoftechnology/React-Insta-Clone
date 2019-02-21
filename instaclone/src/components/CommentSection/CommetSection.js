import React from 'react';

import PropTypes from 'prop-types';
import './comment-section.css';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state={
            comments: this.props.element.comments
        }
                        }

       handleChanges = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      addComment = e => { 
        e.preventDefault();
        const newComment = {
          username: "",
          text: this.state.text,
        }
        this.setState({
          comments: [...this.state.comments, newComment],
          text: "",
        })
}
                    

    render(){
        return(
            <div className="comments">
                {this.state.comments.map(x => (
                <div className="comment">
                    <p><strong>{x.username}</strong></p> <p className="text"> {x.text}</p>  
                </div>
                ))}
                <form className="inputer" onSubmit={this.addComment}>
                    <input type="text" placeholder="Add a comment..." value={this.props.text} name="text" onChange={this.handleChanges}/>
                </form>
            </div>
                                                )}}


CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
       username: PropTypes.string,
       text: PropTypes.string,
                            }))}
export default CommentSection;