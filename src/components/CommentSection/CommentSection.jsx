import React, { Component } from "react"
import "./CommentSection.css"

const Comment = props => (
  <div>
    {props.username}
    {props.text}
  </div>
)

export default class CommentSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    this.setState(() => ({
      comments: this.props.comments ? [...this.props.comments] : []
    }))
  }

  render() {
    return (
      <div className="Post--comments Comments">
        {this.state.comments.map((comment, i) => (
          <Comment key={i} {...comment} />
        ))}
        <input placeholder="Add a comment..." className="Comments--input" />
      </div>
    )
  }
}
