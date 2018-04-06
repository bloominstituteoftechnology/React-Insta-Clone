import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection.js'
class PostContainer extends Component{


render(){
    console.log(this.props.comments)
    return (<React.Fragment>
        {this.props.post.map((post, index) =>( 
        <div key={post, index} class="container"> 
            <div class="header">
                <img class="icon-style" src={post.thumbnailUrl}/>
                <p class ="ptag-style">{post.username }</p> 
               
            </div>
            <div> <img class="mainImg-style" src={post.imageUrl}/></div>
            
            <p>{post.likes} likes</p>
            {post.comments.map(comment=><CommentSection comment={comment}/>)}

            <p>{post.timestamp}</p>
        <div class="comment-style">
            <input input="text" placeholder="Add a comment..."/>
            <i className={this.props.classDots}></i>


        </div>
        </div>
       
        
       
    ))}


    </React.Fragment>
    )
 }
}
export default PostContainer;