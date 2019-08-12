import React from 'react';
import CommentSection from '../CommentSection/commentscontainer';
import PostHeader from './postheader';
import LikeSection from './likesection';
import PropTypes from 'prop-types';



/*export default function Post(props){
  return(
    <div className='post'>
    <PostHeader
    username={props.post.username}
    thumbnailUrl={props.post.thumbnailUrl}/>
    <div className='postimg'>
    <img alt='postimage' className='postimage' src={props.post.imageUrl}/>
    
    </div>
    <LikeSection likes={props.post.likes}/>
    <CommentSection comments={props.post.comments}/>
   
    
    </div>
  )
}*/


export default class Post extends React.Component{
  constructor(props){
    super(props);
    this.state={
      likes:props.post.likes
    }
  }


  incrementLike=()=>{
    let likes=this.state.likes+1;
    this.setState({likes})
  }


  render(){
    return(<div className='post'>
    <PostHeader
    username={this.props.post.username}
    thumbnailUrl={this.props.post.thumbnailUrl}/>
    <div className='postimg'>
    <img alt='postimage' className='postimage' src={this.props.post.imageUrl}/>
    
    </div>
    <LikeSection 
    incrementLike={this.incrementLike}
    likes={this.state.likes}/>
    <CommentSection comments={this.props.post.comments}/>
   
    
    </div>

    )
  }




}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

