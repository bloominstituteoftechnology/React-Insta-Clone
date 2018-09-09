import React from 'react';

const AddLikes = props => {
    return (
        <div className="likes" key="likes-container" onClick={props.addLikes}
        >
            <div className="likes-section">
                <i className="far fa-heart" />
            </div>
            <div className="likes-section">
                <i className="far fa-comment" />
            </div>
        </div>,
        <div className="likes" key="likes-container">
            <div className="likes-section">{props.likes}</div>
        </div>
    )
}

export default AddLikes;