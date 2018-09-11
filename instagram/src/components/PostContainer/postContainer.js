import React from 'react';
import PropTypes from 'prop-types';
import './postContainer.css';



const PostContainer = props => {
    return (
        <div>{props.data.map(data => <dummyData key={data.value} dummyData={data} />)}
    {console.log("I work?")}
    </div>
    );
}
PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        thumbnail: PropTypes.string,
        imgurl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string})
            )
        }))
    };

export default PostContainer;