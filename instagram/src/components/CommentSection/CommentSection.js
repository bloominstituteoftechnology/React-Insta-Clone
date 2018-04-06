import React from 'react';
import { Button } from 'reactstrap';

const styles = {
  fontWeight: 'bold',
  // width: '100%'
}

const commentsStyles = {
  display: 'inline-flex',
  flexDirection: 'column',

  justifyContent: 'center',
  // marginTop: 60,
  // marginRight: '20%',
  height: 400,
  width: '100%',
  marginRight: 80,
  // border: '2px solid red',
  marginLeft: 20,

}
const moreStyles = {
  marginTop: 10,
  marginBottom: 10,
  display: 'inline-flex',
  justifyContent: 'start',
  // border: '2px solid blue',
  width: '100%,',

}
const buttonStyle = {
  display: 'flex',
  marginTop: 10,
  justifyContent: 'center',
  marginLeft: '35%',
  width: '30%'
  // justifyContent: 'end'
}


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      'comments': this.props.comments
    }
  }
  render() {
    // let comments = this.state.comments ;
    return (
      // let commentsA = this.state.comments;
      <div style={commentsStyles}>
        {this.state.comments.map((c, i) => ( 
          <div key={c + i} style={moreStyles} ><span style={styles}>{c.username}</span>: {c.text}</div>
        )
        )}
        <input
          type='text'
          placeholder='Add a comment...'
          onChange={this.props.change}
          value={this.props.value}
        />
        <Button color="primary" style={buttonStyle} onClick={this.props.submit}>Add Comment</Button>{' '}
      </div>
    );

  }
}

export default CommentSection;
