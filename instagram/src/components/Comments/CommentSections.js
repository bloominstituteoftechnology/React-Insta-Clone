import React from 'react'
import './Comments.css'
import Container from 'react-bootstrap/Container'
import Comment from "./Comments";
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row'
import moment from 'moment'

class CommentSections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.commentsData,
            comment: ''
        }
    }

    commentChange = (event) => {
        this.setState({comment: event.target.value})
    };

    addNewComment = (event) => {
        event.preventDefault();

        const comments = this.state.comments.slice();
        const newComment = {text: this.state.comment, username: localStorage.getItem('user')}

        if (this.state.comment !== '') {
            comments.push(newComment);
            this.setState({comments:comments, comment: ''})
        }
    };

    render() {
        const time = moment(this.props.time, "MMM Do YYYY, h:mm:ss a");
        console.log(this.props.timestamp)
        const newTime = time.fromNow().toUpperCase();
        return (
            <Container className='comment-sections'>
                {this.state.comments.map((commentData, index) => {
                    return <Comment commentData={commentData} key={index}/>
                })}
                <Row>
                    <hr className='comment-line'/>
                    <form className='comment-form' onSubmit={this.addNewComment}>
                        <span>
                            <input onChange={this.commentChange} className='comment-input' type='text' placeholder='Add a comment...'/>
                        </span>
                        <span><strong>...</strong></span>
                    </form>
                </Row>
                <Row>{newTime}</Row>
                

            </Container>
        );
    }
}


CommentSections.propTypes = {
    commentsData: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })),
};

export default CommentSections