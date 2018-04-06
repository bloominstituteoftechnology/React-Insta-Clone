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
            <div class="bContainer-style">
            <div class="bIcon-style"><i className={this.props.classBHeart}></i><i className={this.props.classComment}> </i></div>
            <p class="likes-style">{post.likes} likes</p>
            {post.comments.map(comment=><CommentSection comment={comment}/>)}

            <p class="timestamp-style">{post.timestamp}</p>
        <div class="comment-style">
            <input class="inputText-style" input="text" placeholder="Add a comment..."/>
            <i className={this.props.classDots}></i>


        </div>
        </div>

        </div>
       
        
        
    ))}


    </React.Fragment>
    )
 }
}
export default PostContainer;