import React from "react"
import CommentSection from "../CommentSection"

export default props => (
  <div className="Post--container">
    <img
      alt="thumbnail"
      className="Post--thumbnail Post--thumbnail__rounded Post--thumbnail__size"
      src={props.thumbnailUrl}
    />
    <a
      href={`https://instagram.com/${props.username}`}
      class="Post--username Post--username__size Post--username__decoration"
    >
      {props.username}
    </a>
    <img alt="main" className="Post--Main" src={props.imageUrl} />

    <CommentSection />
  </div>
)
