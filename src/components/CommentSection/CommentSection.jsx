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

  keyPress(keyCode, value) {
    keyCode === 13
      ? this.setState(prevState => ({
          comments: [
            ...prevState.comments,
            { text: value, username: "kimkardashian" }
          ]
        }))
      : ""
  }

  render() {
    return (
      <div className="Post--comments Comments">
        {this.state.comments.map((comment, i) => (
          <Comment key={i} {...comment} />
        ))}
        <input
          onKeyDown={({ keyCode, target: { value } }) => {
            this.keyPress(keyCode, value)
            keyCode === 13 ? (value = "") : ""
          }}
          placeholder="Add a comment..."
          className="Comments--input"
        />
      </div>
    )
  }
}
