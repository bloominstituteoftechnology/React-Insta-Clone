import React from 'react'

const LikesPost = (props) => {
    return (
        <div>
            <div className='likes'>
                <i onClick={props.increment} className="far fa-heart fa-2x comment-icons"></i>
                <i className="far fa-comment fa-2x comment-icons"></i>
                <h4> {props.likes} likes </h4>
            </div> 
        </div>
    )
}

export default LikesPost