import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import moment from "moment";

/***************************************************************************************************
 ********************************************** Styles *********************************************
 ***************************************************************************************************/
const DivComment = styled.div`
  width: 80%;
  margin: 10px 0;
  border: 1px solid lightblue;
  border-radius: 5px;
`;

const H4Comment = styled.h4`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 0;
  background-color: lightblue;
  font-size: 14px;
`;

const SpanTimestamp = styled.span`
  color: gray;
  font-size: 9px;
`;

const PComment = styled.p`
  padding: 5px;
  margin: 5px 0;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 ***************************************************************************************************/
const CommentSection = props => {
  return (
    <DivComment>
      <H4Comment>
        {props.comment.username}{" "}
        <SpanTimestamp>
          {moment(props.comment.timestamp, "MMMM Do YYYY hh:mm:ss A").fromNow()}
        </SpanTimestamp>
      </H4Comment>
      <PComment>{props.comment.text}</PComment>
    </DivComment>
  );
};

CommentSection.propTypes = {
  "get key": PropTypes.func,
  comment: PropTypes.shape({
    username: PropTypes.string,
    timestamp: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentSection;
