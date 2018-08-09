import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  position: fixed;
  top: 0;
  z-index: 1;

  margin-left: 0%;
  margin-right: 0%;
`;

const LeftNav = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
  i {
    padding-bottom: 10px;
  }
`;
const LogoText = styled.h1`
  font-family: "Lobster Two", "CRoboto";
  font-size: 28px;
  border-left: 2px solid #c2c2c2;
  margin-left: 20px;
  padding-left: 20px;
`;

const SearchInput = styled.input`
  text-align: center;
  display: flex;
  margin-left: 20%;
  margin-right: 15%;
  max-width: 300px;
  width: 100%;
`;

const RightNav = styled.div`
  display: flex;
  font-size: 28px;
  letter-spacing: 10px;
  justify-content: flex-end;
`;

const SearchBar = (props) => {
  return (
    <SearchContainer>
      <Container className="sContainer">
        <Row className="searchBar">
          <Col sm="4" xs="12">
            <LeftNav className="leftNavMedia">
              <i className="fab fa-instagram" />
              <LogoText>Instagram</LogoText>
            </LeftNav>
          </Col>
          <Col sm="3" xs="12" className="searchMedia">
            <SearchInput
              className="fa fa-input"
              placeholder="&#xf002; Search"
            />
          </Col>
          <Col sm="4" xs="12">
            <RightNav className="rightNavMedia">
              <i className="far fa-compass" />
              <i className="far fa-heart" />
              <i className="far fa-user" />
              <i className="fas fa-sign-out-alt logout" onClick={props.handleLogout} />
            </RightNav>
          </Col>
        </Row>
      </Container>
    </SearchContainer>
  );
};

Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}
export default SearchBar;
