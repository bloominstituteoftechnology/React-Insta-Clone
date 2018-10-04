import React from 'react';
import dummyData from '../../dummy-data';
import PropTypes from 'prop-types'
import './CommentSection.css'

const CommentSection = props => {

    const {username, timestamp} = props.Data;
    return(
        <div cmntSectDiv>
        {dummyData.map(item => <div key={item.username}>
            {item.username}

            <img src={item.thumbnailUrl} />
            <div>{item.likes}</div>
            <div>{item.timestamp}</div>
            {/* <div>{dummyData.comments.map(item =>
            
            <div key={item.comments.text}>
                {item}
            </div>
            )}</div> */}

            {/* In theory I feel like I should be able to nest a map method
            within a map method, so long as the parameters match and the values resolve correctly. */}

        </div>)}
        </div>
    )
}

CommentSection.propTypes = {
    dummyData: PropTypes.arrayOf(
        (CommentSection.defaultProps ={
            Data: PropTypes.shape({
                username: PropTypes.string.isRequired,
                likes: PropTypes.number.isRequired,
                comments: PropTypes.array.isRequired,
                
            })

        })

    )
}
export default CommentSection