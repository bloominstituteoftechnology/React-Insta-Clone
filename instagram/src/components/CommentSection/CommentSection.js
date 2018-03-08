import React, { Component } from 'react';
import './CommentSection.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class CommentSection extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  componentDidMount() {
    this.setState({comments: this.props.comments})
  }

  render() {
    console.log("render commentsection",this.state.comments);
    return (
      <div className="CommentContainer">
      
        {this.props.comments.map(comment => {
        return (
          <div>
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Open Comment</Button>
          <Collapse isOpen={this.state.collapse} key={comment}>
          
          <Card>
            <CardBody>
            <div>{comment.username}</div>
            <div>{comment.text}</div>
            </CardBody>
            </Card>
            
          </Collapse>
          </div>
          );
          
        }
      )}
      </div>
    );
  }
};

export default CommentSection;