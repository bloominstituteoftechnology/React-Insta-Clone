import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DisplayAccountInfo from "./DisplayAccountInfo";

/***************************************************************************************************
 ********************************************** Styles *********************************************
 ***************************************************************************************************/
const DivAccountsListContainer = styled.div`
  color: white;
  background-color: rgb(30, 30, 30);
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const H1DisplayAccountsTitle = styled.h1`
  text-align: center;
  color: #959595;
`;

const DivAccountsList = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 ***************************************************************************************************/
const DisplayAccountsList = props => {
  return (
    <DivAccountsListContainer>
      <H1DisplayAccountsTitle>
        Use one of the following test accounts to login...
      </H1DisplayAccountsTitle>
      <DivAccountsList>
        {props.testAccounts.map(testAccount => {
          return (
            <DisplayAccountInfo
              key={testAccount.username}
              testAccount={testAccount}
            />
          );
        })}
      </DivAccountsList>
    </DivAccountsListContainer>
  );
};

DisplayAccountsList.propTypes = {
  testAccounts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
      thumbnailUrl: PropTypes.string
    })
  )
};

export default DisplayAccountsList;
