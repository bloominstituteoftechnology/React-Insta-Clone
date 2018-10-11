import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';


const WrapperDiv = Styled.div`
    display:flex;
    justify-content: space-between;
    align-items: baseline;   
    border-top:1px solid #ccc;
    width: 95%;
    margin:0 auto;
    margin-bottom:18px;    
`
const AddNewComment = Styled.div`
    margin-top:23px;
    font-size:1rem;
`
const NewCommentTools = Styled.div`
    font-size: 1rem;   
`


const NewCommentSection = props =>{
    return(

        <WrapperDiv>
            <AddNewComment>
                <form onSubmit={props.addNewComment}>
                    <input id={props.postId} value={props.newComment} placeholder='Add a comment...' onChange={props.handleCommentChange} />
                </form>
            </AddNewComment>
            <NewCommentTools><p>...</p></NewCommentTools>
        </WrapperDiv>

    )
}

NewCommentSection.propTypes = {
    addNewComment: PropTypes.func,
    commentId:PropTypes.number
}


export default NewCommentSection;
