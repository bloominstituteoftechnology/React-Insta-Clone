import React from 'react';


const PostContainer = (props) => {
    return (
        <div>
            {
                props.instaFeed.map((post, index)=> {
                    return (
                        <div key={index}>
                        <section className="logoSection">
                            <img src={post.thumbnailUrl}/>
                            <p> {post.username}</p>
                        </section>
                        
                    
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default PostContainer;