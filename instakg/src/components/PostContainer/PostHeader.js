import React from 'react';

let PostHeader = (props)=>{
   
        return (
            <div className="row header">
                 <div className='userIcon'> <img alt='usericon' className="userIcon" src={props.thumbnail}></img> </div>     
        <div className='userName'> {props.userdisplay}</div>
            </div>
        );
    
}

export default PostHeader;