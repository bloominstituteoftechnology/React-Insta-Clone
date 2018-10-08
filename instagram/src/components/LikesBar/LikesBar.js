import React from 'react';

const LikesBar = props =>{
    return(
        <div>
            <div></div>
            <div>{props.data.likes} likes</div>
        </div>
    )
}

export default LikesBar;