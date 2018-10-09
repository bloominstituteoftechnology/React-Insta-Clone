import React from "react"
import "./PostContainer.css"

const PostContainer = props => {
    return(
        <section className= "postContainer">
        {props.post.map (post => {
            return (
            <div className= "card">
                <section className="userInfo">
                  <img src={post.thumbnailUrl} alt="postimage"></img>
                  <h2>{post.username}</h2>
                </section>
                <img src={post.imageUrl} alt="postimage"></img>
                <h2>likes: {post.likes}</h2>
                <div>
                  {post.comments.map(element => {
                      return(
                          <section className="commentSection">
                              <span>{element.username}</span>
                              {" " + element.text}
                          </section>
                      )
                  })}
                </div>
                <p>{post.timestamp}</p>
            </div>
            )
        })}
        </section>
    )

}

export default PostContainer