import React from 'react';
import Comment from '../CommentSection/Comment';
import './post.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5% auto;
`

const PostHeader = styled.div`
    display: flex;
    align-items: center;
`

const AddCommentForm = styled.div`
    margin: 2% 0;
    display: flex;
    opacity: 0.5;
    border: 1px solid black;
`

const AddCommentText = styled.input`
    display: inline;
    width: 90%;
    height: 25px;
`

const AddCommentButton = styled.button`
    width: 10%;
    display: inline;
`

const Thumbnail = styled.img`
    max-width: 30px;
    max-height: 30px;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    margin: 10px;
`

const PostContainer = (props) => {
    let hideMe = props.searchTerm !== '' ? true : false;
    if (props.username.includes(props.searchTerm)) {
        hideMe = false;
    }

    function clickHandler() {
        props.clickHandler(props.timestamp);
    }

    function addComment() {
        props.addCommentClickHandler(props.timestamp);
    }

    function clearInput(event) {
        if (event.target.value === 'Add a comment.') {
            event.target.value = '';
        }
    }

    if (hideMe) {
        return <> </>
    }
    else {
        return (
            <Container>
                <PostHeader>
                    <Thumbnail src={props.thumbnailUrl} alt={props.username} />
                    <p>{props.username}</p>
                </PostHeader>
                <img src={props.imageUrl} alt={props.username}/>
                <div className='likes-section'>
                    {/*Get images for the likes*/}
                    <i className="like far fa-heart fa-2x" onClick={clickHandler}></i>
                    <i className="far fa-comment fa-2x"></i>
                    <p>{props.likes}</p>
                </div>
                <>
                {props.comments.map(item => {
                    return (
                        <Comment 
                        username={item.username} 
                        text={item.text}
                        />
                    )
                })}
                </>
                <AddCommentForm>
                    <AddCommentText onClick={clearInput} onChange={props.commentTextOnChange} defaultValue='Add a comment.' />
                    <AddCommentButton onClick={addComment}>:</AddCommentButton>
                </AddCommentForm>
            </Container>
        )
    }
}

/* PropTypes data type enforcement */
PostContainer.propTypes = {
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })
    ).isRequired,
};
export default PostContainer;