import React from 'react';
import PropTypes from 'prop-types';
import './commentSection.css';
import Comments from './Comments';
import CommentInput from './CommentInput';



class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }
    render() {
        return (
            <div>{this.state.comments.map((each) => <Comments key={each.username} comments={each} />)}
                <CommentInput />
            </div> 
        );  
    };
}
    

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
};
 export default CommentSection;