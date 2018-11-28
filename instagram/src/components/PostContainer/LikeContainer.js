import React from "react";

const LikeContainer = props => {
    return (
        <React.Fragment>
            <div className='like-container'
                key='likes-icons-container'
                onClick={props.addLike}>
                <div className='like-container-wrap'>
                    <i className='fa fa-heart' />
                </div>
                <div className='like-container-wrap'>
                    <i className='fa fa-comment' />
                </div>       
            </div>
            <div className='like-container'
                key='likes-container'>
                <div className='like-container-wrap'>
                    {props.likes}
                </div> 
            </div>
        </React.Fragment>    
    );
}


export default LikeContainer;