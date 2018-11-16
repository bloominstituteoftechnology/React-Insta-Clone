import React from 'react';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';
import './CommentsSection.css';
import styled from 'styled-components';

const Comments = styled.div`
    width: 100%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   
    justify-content: flex-start;
`;

const CommentsSection = props => {
    return (
        <Comments>
            {props.comments.map((comment, index) =>
                <Comment 
                    key={Math.random()}
                    comment={comment}
                    index={index}
                    removeComment={props.removeComment}
                    parentIndex={props.parentIndex}
                />    
            )}
        </Comments>
    );
}

CommentsSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentsSection;