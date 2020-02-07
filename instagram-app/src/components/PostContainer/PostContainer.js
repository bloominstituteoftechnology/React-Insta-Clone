import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';


class PostContainer extends React.Component {


    render() {
        return (


    <div className="post-container">

     {this.props.data.map(post => {
         return (
                <>
                    <header>

                     
                  <img src={post.thumbnailUrl} alt="thumb" /> 
                                        
                        <h3>{post.username}</h3>
                                
                    </header>

                    <img src={post.imageUrl} alt="main" />
                            
            <section className="likebar">
                {post.likes} likes
            </section>
                     
            <CommentSection
                        comments={post.comments}
                        timestamp={post.timestamp} />
                            
                </>
                        
        );
})}

</div>    


        );
    };
}

export default PostContainer;
