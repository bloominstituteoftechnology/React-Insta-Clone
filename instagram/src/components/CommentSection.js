import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
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

    span {
        font-size: 2.5rem;
        margin-right: 3%;
        cursor: pointer;

        &:last-of-type {
            margin-right: 0;
        }
        &:active {
            transform: translateY(1px);
        }
        &:active:last-child {
            transform: translateY(1px) scaleX(-1);
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
            commentRef: React.createRef(),
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
                    <span 
                        className="far fa-heart" 
                        onClick={this.addNewLike}
                        style={this.state.liked ? {color: '#FF4136'} : {}}
                    ></span>
                    <span 
                        className="far fa-comment fa-flip-horizontal"
                        onClick={() => this.state.commentRef.current.focus()}
                    ></span>
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
                        ref={this.state.commentRef}
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