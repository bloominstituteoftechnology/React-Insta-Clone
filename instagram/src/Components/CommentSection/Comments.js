import React from 'react'
import './CommentSection.css'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const CommentsDiv = styled.div`
    display: flex;
    font-size: 10px;
    font-weight: 600;
`

const P = styled.div`
    margin: 0;
`

const Text = styled.span`
    margin-left: 4px;
    font-weight: 400;
`

const Comments = props => {
    return (
        <CommentsDiv>
            <P>
                {props.comments.username}
                <Text>
                    {props.comments.text}
                </Text>
            </P>
            
        </CommentsDiv>
    )
}

// Comment.propTypes = {
//     comments: PropTypes.arrayOf(
//         PropTypes.shape({
//             username: PropTypes.string,
//             text: PropTypes.string
//         })
//     ).isRequired
// }

export default Comments