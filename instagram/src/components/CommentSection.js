import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import heart from '../assets/insta-heart.png';
import reply from '../assets/insta-reply.PNG';  // For some reason, caps required for png
import commentOptions from '../assets/insta-comment.PNG';
import Comment from './Comment';

const Comments = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 3%;

    h5 {
        margin: 10px 0;
        font-weight: bold;
    }
`;

const Icons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 10px;

    img {
        height: 25px;
        margin-right: 3%;
        cursor: pointer;

        &:last-of-type {
            margin-right: 0;
        }

    }
`;

const Date = styled.p`
    font-size: 14px;
    color: gray;
`;

const AddComment = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    border-top: 1px solid rgba(128, 128, 128, 0.3);
    margin-top: 10px;

    input {
        height: 20px;
        margin: 15px 0;
        font-size: 16px;
        border: none;
        text-align: left;
        flex-grow: 1;
    }

    img {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`;


////////////////////////////////////////////////////////////////////////////////////////////


class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: this.props.comments,
            likes: this.props.likes,
            time: this.props.time,
            input: '',
            liked: false,
        };
    }
    componentDidUpdate(prevProps, prevState){
        if (JSON.stringify(prevProps.comments) !== JSON.stringify(this.props.comments)){
            this.setState({ comments: this.props.comments });
        }
    }
    handleCommentInput = (e) => {
        this.setState({ input: e.target.value });
    }

    addNewLike = () => {
        this.setState((prevState) => {
            return {
                likes: prevState.liked ? prevState.likes - 1 : prevState.likes + 1,
                liked: !prevState.liked,
            };
        })
    }
    render(){
        return (
            <Comments>
                <Icons>
                    <img src={heart} alt="fave button" draggable="false" onClick={this.addNewLike} />
                    <img src={reply} alt="reply button" draggable="false" />
                </Icons>
                <h5>{this.state.likes} like{this.state.likes !== 1 ? 's':null}</h5>
                <div className="comment-list">
                    {this.state.comments.slice(-5).map(comment => (
                        <Comment 
                        key={comment.id} 
                        name={comment.username} 
                        text={comment.text} 
                        onDelete={() => this.props.onDeleteComment(comment.id, this.props.index)}/>
                    ))}
                    </div> {/* Adding ID's to my newly generated comments, but don't want to go modify dummy data. */}
                <Date>{moment(this.state.time, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}</Date>
                <AddComment onSubmit={(e) => { 
                    e.preventDefault();
                    this.props.onNewComment(this.state.input, this.props.index);
                    this.setState({ input: '' })
                }}>
                    <input 
                        type='text' 
                        placeholder='Add a Comment...' 
                        value={this.state.input} 
                        onChange={this.handleCommentInput} 
                    />
                    <img src={commentOptions} 
                        alt='Comment options button' 
                        onClick={() => {
                            this.props.onNewComment(this.state.input, this.props.index);
                            this.setState( { input: '' } );
                        }}
                        draggable="false"
                    />
                </AddComment>
            </Comments>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })),
    likes: PropTypes.number,
    time: PropTypes.string,
    index: PropTypes.number,
    onNewComment: PropTypes.func,
    onDeleteComment: PropTypes.func,
};

export default CommentSection;