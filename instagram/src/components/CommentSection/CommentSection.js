import React from 'react';
import './CommentSection.css'
import PropTypes from 'prop-types';
import dummyData from '../../dummy-data'

class CommentSection extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            comment: ''
        };
    }

    componentDidMount () {
        this.setState({comments: dummyData.comments})
    }
    
    // const addNewComment = (e, i) => {
    //     return {
    //         e.target.value
    //     }
    // }

    render() {
        return(
            <div>
                {this.props.comments.map(comment => {
                    return (
                        <div className="nameAndComment" key={comment.text}>
                            <span><strong>{comment.username}</strong></span>
                            <span> {comment.text}</span>
                        </div>
                    );
                })} 
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;