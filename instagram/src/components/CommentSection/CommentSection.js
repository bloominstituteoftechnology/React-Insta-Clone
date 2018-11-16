import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'
import CommentInput from './CommentInput'
import styled from 'styled-components'

const StyleCS = styled.div`
    width: 600px;
    padding: 10px;
    padding-right: 30px;
`;
class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            inputText: ''
        }
    }
    componentDidMount() {
        this.setState({ comments: this.props.comments })
    }

    handler = event => {
        this.setState({ inputText: event.target.value
         });
        
    };
    addNewComment = event => {
        event.preventDefault();
        if (!(this.state.inputText === '')) {
            this.setState({
                comments: [
                    ...this.state.comments,
                    { username: this.props.user, text: this.state.inputText }
                ],
                inputText: ''
            });
        }
    };
  

    render() {
        return (
            <StyleCS>
                 {
                this.state.comments.map((comment) =>
                <Comment key={Math.random()} comment={comment} />)
                } 
                <CommentInput
                    inputText = {this.state.inputText}
                    handler = {this.handler}
                    addNewComment ={this.addNewComment}
                />
            </StyleCS>
        );
    }
}


export default CommentSection;