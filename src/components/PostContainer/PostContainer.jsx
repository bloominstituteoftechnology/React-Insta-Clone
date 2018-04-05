import React from "react"
import CommentSection from "../CommentSection"

export default props => (
  <div>
    <img alt="thumbnail" src={props.thumbnailUrl} />
    <img alt="main" src={props.imageUrl} />
    <CommentSection />
  </div>
)
