import React from 'react';

function Photo(props) {
    return <div className="mainPostPhoto">
        <img width='600' height='600' src={props.mainPost} alt="userPost" />
    </div>
}

export default Photo;