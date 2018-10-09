import React from "react"
import "./PostContainer.css"

const PostContainer = props => {
    return(
        props.post.map (post => {
            return (
            <div className= "postContainer">
                <section>
                  <img src={post.thumbnailUrl} alt="postimage"></img>
                  <h2>{post.username}</h2>
                </section>
                <img src={post.imageUrl} alt="postimage"></img>
                <h2>likes: {post.likes}</h2>
                <section className="comments">
                  {post.comments.map(element => {
                      return(
                          <div>
                              {element.username}
                              {element.text}
                          </div>
                      )
                  })}

                </section>
            </div>
            )
        })
    )

}

export default PostContainer