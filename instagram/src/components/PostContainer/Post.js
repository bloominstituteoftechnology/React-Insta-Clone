import React from 'react';
import '../../App.css'
import PropTypes from 'prop-types';


const Post = props =>{
    console.log(props)
    return (
      <div className="post">
        <div className="post-header">
            <img src={props.thumbnailUrl}/>
            <p className="font-weight-bold">{props.username}</p>
        </div>
        <div className="post-img">
            <img src={props.imageUrl} alt=""/>
        </div>
      </div>
    );
}



export default Post;
