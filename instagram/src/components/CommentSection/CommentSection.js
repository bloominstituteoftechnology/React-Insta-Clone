import React, {Component} from 'react';


class CommentSection extends Component{
constructor(props){
super(props)

}
this.state{
    comments:{props.comments}
}

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
            
            
        
        
        
        </div>
       
        
       
    ))}


    </React.Fragment>
    )
 }
}
export default PostContainer;