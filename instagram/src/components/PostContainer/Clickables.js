import React from 'react';

function Clickables(props) {
    return <div>
        <div className="likeButton">
            <img src='' alt=''></img>
            <img src='' alt=''></img>
        </div>
    <div className='likeCounter'>{props.likes}</div>
    </div>
}

export default Clickables;