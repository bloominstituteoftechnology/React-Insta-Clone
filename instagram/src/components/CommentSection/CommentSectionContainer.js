import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import styled from 'styled-components';
import like from '../../assets/heart.svg';


const CommentArea = styled.div`
    padding: 3% 3% 0 3%;
`;

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      inputText: '',
      userName: 'AnakinSky14'
    };
  }

  componentDidMount(){
      this.setState({
          comments: this.state.comments
      });
  }

  addNewComment = event => {
      event.preventDefault();
      if (this.state.inputText) {
          this.setState({
              comments: [...this.state.comments, {username: this.state.userName, text: this.state.inputText}],
              inputText: ''
          });
      }
  };

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };


  render() {
    return (
      <CommentArea>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput inputText={this.state.inputText} handleInput={this.handleInput} addNewComment= {this.addNewComment}/>
      </CommentArea>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;