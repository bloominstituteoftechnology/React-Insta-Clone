import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/***************************************************************************************************
 ********************************************** Styles *********************************************
 ***************************************************************************************************/
const AccountInfoCard = styled.div`
  color: white;
  border-radius: 10px;
  width: 270px;
  margin: 20px;
  padding-left: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const AccountCardText = styled.h4`
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
`;

const SpanHidden = styled.span`
  color: #959595;
  text-shadow: none;
`;

const SpanRed = styled.span`
  color: red;
  text-shadow: none;
`;

const SpanGreen = styled.span`
  color: green;
  text-shadow: none;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 ***************************************************************************************************/
const DisplayAccountInfo = props => {
  return (
    <AccountInfoCard>
      <AccountCardText>
        Username: <SpanHidden>{props.testAccount.username}</SpanHidden>
      </AccountCardText>
      <AccountCardText>
        Password: <SpanHidden>{props.testAccount.password}</SpanHidden>
      </AccountCardText>
      <AccountCardText>
        Has Thumbnail:{" "}
        {props.testAccount.thumbnailUrl === "default" ? (
          <SpanRed>No</SpanRed>
        ) : (
          <SpanGreen>Yes</SpanGreen>
        )}
      </AccountCardText>
    </AccountInfoCard>
  );
};

DisplayAccountInfo.propTypes = {
  propertyName: PropTypes.string
};

export default DisplayAccountInfo;
