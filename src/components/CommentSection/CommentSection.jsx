import React, { Component } from "react"

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
      <div className="Post--comments">
        <input />
      </div>
    )
  }
}
