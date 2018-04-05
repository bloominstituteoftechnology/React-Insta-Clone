import React, {Component} from 'react';

class PostContainer extends Component{


render(){
    console.log(this.props)
    return (<React.Fragment>
        {this.props.post.map(post =>( 
        <div class="container"> 
            <div class="header">
                <img class="icon-style" src={post.thumbnailUrl}/>
                <p class ="ptag-style">{post.username }</p> 
               
            </div>
            <div> <img class="mainImg-style" src={post.imageUrl}/></div>
            
            <p>{post.likes} likes</p>

            <p>{post.timestamp}</p>
        
        
        
        </div>
       
        
       
    ))}


    </React.Fragment>
    )
 }
}
export default PostContainer;