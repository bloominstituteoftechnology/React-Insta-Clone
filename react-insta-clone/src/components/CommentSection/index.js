import React, {Component} from "react";;

const addNewComment = (x, y) => x * y;

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: this.props.caption
    }
}
  render() {

    let caption =  this.state.caption.map(text => <div> <strong>{text.username}</strong> <p>{text.text}</p></div>)


    return (
      <div>
{caption}
    </div>)
  }
}

export default CommentSection;
