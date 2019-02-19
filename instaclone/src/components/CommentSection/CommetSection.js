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
    render(){
        return(
            <div className="comments">
                {this.state.comments.map(x => (
                    <div className="comment">
                        <p><strong>{x.username}</strong></p> <p className="text"> {x.text}</p>  
                    </div>
                ))}
                <div>
                    <input type="text" placeholder="Add a comment..."/>
                </div>
            </div>
                                                )}}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
       username: PropTypes.string,
       text: PropTypes.string,
    }))
}
export default CommentSection;