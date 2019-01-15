import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

import PropTypes from "prop-types";
import InstaNavbar from "./InstaNavbar";
import InstaCard from "./InstaCard";

const InstagramStyle = styled.div`
  .left_side,
  .right_side {
    border: 1px solid gray;
  }
`;

class Instagram extends Component {
  render() {
    const { instagram } = this.props;
    const cardComponent = instagram.map((item, index) => (
      <InstaCard key={index} item={item} />
    ));
    return (
      <InstagramStyle>
        <InstaNavbar />
        <Container className="wrapper">
          <Row style={{ marginTop: "50px" }}>
            <Col sm="9">{cardComponent}</Col>
            <Col sm="3">
              <div className="right_side">Right side!</div>
            </Col>
          </Row>
        </Container>
      </InstagramStyle>
    );
  }
}

Instagram.propTypes = {
  instagram: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          username: PropTypes.string
        })
      ),
      thumbnailUrl: PropTypes.string,
      timestamp: PropTypes.string,
      username: PropTypes.string
    })
  )
};

const mapStateToProps = state => ({
  instagram: state.instagram.data
});

export default connect(mapStateToProps)(Instagram);
