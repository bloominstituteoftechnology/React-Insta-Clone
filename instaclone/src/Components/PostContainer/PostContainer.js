import React from 'react';
import './PostContainer.css'

import CommentSection from '../CommentSection/CommentSection';
import UserInfo from '../UserInfo/UserInfo';

import {FaRegComment, FaRegHeart, FaHeart}  from 'react-icons/fa'
import { IconContext } from "react-icons";

 

class PostContainer extends  React.Component {
    constructor(props){
        super(props)
        this.state={
            liked:false
        };
    }

    toggleLiked = event =>{
        if(!this.state.liked){
            this.setState({liked: true})
            this.props.updateLikes(this.props.index,true);
        }else{
            this.setState({liked: false})
            this.props.updateLikes(this.props.index,false);
        }
        
    }


    render(){ 
        return (
            <div className="post-container">
                <UserInfo thumbnailUrl={this.props.post.thumbnailUrl} username={this.props.post.username} />
    
                <div className="image-container">
                    <img src={this.props.post.imageUrl} alt="" className="post-image"/>
                </div>
    
                <div className="bottom-container">
                    <div className="icon-container">
                        <IconContext.Provider value={{ size: "1.5rem",className:"fa-icon" }}>
                            {this.state.liked === false? <FaRegHeart onClick={this.toggleLiked} />:<FaHeart onClick={this.toggleLiked} /> }
                            <FaRegComment />
                        </IconContext.Provider>
                    </div>
                    <p className="likes">{this.props.post.likes} likes</p>
                    <CommentSection 
                        comments={this.props.post.comments} 
                        timestamp={this.props.post.timestamp} 
                        index={this.props.index}
                        updateComments={this.props.updateComments}
                    />
                </div>
                
            </div>
        ); 
    }
}
 
export default PostContainer;