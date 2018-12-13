import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bulma-components/lib/components/container";
import Heading from "react-bulma-components/lib/components/heading";
import {
  Field,
  Control,
  Input
} from "react-bulma-components/lib/components/form";
import Icon from "react-bulma-components/lib/components/icon";
import PropTypes from "prop-types";
import "./CommentSection.scss";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: ""
    };
  }

  onTextInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Container>
        <Container>
        <FontAwesomeIcon icon={["far", "heart"]} size="2x" />
        <FontAwesomeIcon icon={["far", "comment"]} size="2x" flip="horizontal" />
        </Container>
        {this.props.comments.map((current, index) => {
          return (
            <Container key={`comments-of-${this.props.belongsTo}-from-${current.username}-keyIsText:${current.text}`} className="flexify">
              <Heading subtitle size={5} renderAs="h2"> {current.username} </Heading> <p> {current.text} </p>
            </Container>
          );
        })}
        <p>{this.props.time}</p>
        <Field>
          <Control iconRight>
            <Input
              type="text"
              placeholder="Leave a comment..."
              name="newComment"
              onChange={this.onTextInputChange}
              value={this.state.newComment}
            />
            <Icon align="right">
              <FontAwesomeIcon icon={["fas", "ellipsis-h"]} size="sm" />
            </Icon>
          </Control>
        </Field>
      </Container>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
  }))
}

export default CommentSection;
