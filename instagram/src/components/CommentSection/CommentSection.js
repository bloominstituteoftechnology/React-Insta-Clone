import React from 'react';
import styled from 'styled-components';
import CommentForm from './CommentForm';
import PropTypes from 'prop-types';
import moment from 'moment';

const IndividualComment = styled.div`
    margin: 10px 14px;
    font-size: 1.6rem;

    span {
        font-weight: bold;
    }
`

const Timestamp = styled.p`
    margin: 14px;
    font-size: 1.1rem;
`



class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
            timestamp: this.props.postTimestamp,
            newComment: '',
        }
    }

    addNewComment = event => {
        event.preventDefault();

        let constructedComment = [...this.state.comments, 
            {
                username: JSON.parse(localStorage.getItem('username')),
                text:  this.state.newComment,
            }];
        

        this.setState({
                comments: constructedComment,
                newComment: '',
            });
        }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return(
            <div>
                {this.state.comments.map((item, index) => (
                        <IndividualComment key={index}>
                            <p><span>{item.username}</span> {item.text}</p>
                        </IndividualComment>
                ))}
                <Timestamp>{moment(this.state.timestamp, 'MMMM-DD-YYYY hh:mm:ss').fromNow().toUpperCase()}</Timestamp>
                <CommentForm 
                    newComment={this.state.newComment} 
                    handleChange={this.handleChange}
                    addNewComment={this.addNewComment}
                />
            </div>
        );
    }
}

CommentSection.propTypes = {
    timestamp: PropTypes.string,
    newComment: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }))
}

export default CommentSection;