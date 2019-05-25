import React from 'react'
import Post from './Post';
import PropTypes from 'prop-types';






function PostContainer(props) {
    return (
        <div>

            
            {props.datasetInfo.map(info => {
                return <Post key={info.imageUrl} info={info}/>
            
            })}
                
            

        </div>

    )     
} // main curly 


PostContainer.propTypes = {
    datasetInfo: PropTypes.array
}


export default PostContainer;