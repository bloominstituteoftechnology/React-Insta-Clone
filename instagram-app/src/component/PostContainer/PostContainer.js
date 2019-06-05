import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection'

class PostContainer extends Component {
   
    render() { 
        return ( 
            <div className="post-container">
                {this.props.data.map(post => {
                    return (
                        <>
                        
                        <header>
                            <img src={post.thumbnailUrl} alt="thumbnail"/>
                            <h3>{post.username}</h3>
                        </header>

                        <img src={post.imageUrl} alt={post.id}/>

                        <section className="likebar">
                            {post.likes} likes
                        </section>

                        <CommentSection 
                            comments={post.comments}
                            timestamp={post.timestamp}
                        />

                        </>
                    )
                })}
            </div>
         );
    }
}
 
export default PostContainer;