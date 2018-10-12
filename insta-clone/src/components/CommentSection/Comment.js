import React from 'react'
import {CommentSection} from '../Styles/StylePost'


const Comment = props => {

    return (
        <CommentSection>
            <span className='post-user'>{props.user}</span> {''}
            <span className='post-comments'>{props.comments}</span>
        </CommentSection>


    )
}


export default Comment