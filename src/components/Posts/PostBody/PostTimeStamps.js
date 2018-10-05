import React from 'react';
import '../post.css';


const PostTimeStamps = props => {
    return(
        <div className={"postTimeStamp"}>
        {props.posttime.timestamp}
        </div>
    )
}

export default PostTimeStamps