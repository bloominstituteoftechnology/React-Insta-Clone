import React, {Component} from "react";
import moment from 'moment';

const addNewComment = (x, y) => x * y;

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: this.props.caption,
      time: this.props.time
    }
}



  render() {
      let now = this.state.time;
    // let time = this.state.now.map(text => <div> <strong>{text.timestamp}</strong></div>)

    let caption =  this.state.caption.map(text => <div> <strong>{text.username}</strong> <p>{text.text}</p></div>)


    return (
      <div>
{caption}

{/* {moment({now}).fromNow()} */}
    </div>)
  }
}

export default CommentSection;
