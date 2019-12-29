import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import Heart from '../../assets/heart.svg';
import styled from 'styled-components';

const HeartImage = styled.img `
        width: 25px;
        display: flex;
        justify-content: flex-start;
        margin-left: 10px;
        margin-top: 5px;
    `;

const Likes = styled.div `
        display: flex;
        flex-direction: column-reverse;
        width: 40px;
    `;

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments,
        newComment: "",
        likes: 0
      };
    }

    addNewComment = event => {
        event.preventDefault();
        this.setState({
          comments: [
            ...this.state.comments,
            { text: this.state.newComment, username: "SomeUser" }
          ],
          newComment: ""
        });
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    increaseLikes = event => {
        event.preventDefault();
        this.setState({ likes: this.state.likes + 1 });
    }

    render() {
        return (
            <div className='comment-section'>
                <Likes>
                    {this.state.likes}
                    <HeartImage onClick={this.increaseLikes} src={Heart} />
                </Likes>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <CommentInput
                    addNewComment={this.addNewComment}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };

export default CommentSection;