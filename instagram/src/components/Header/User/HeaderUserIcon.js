import React, { Component } from "react";
import { User as FeatherUserIcn } from "react-feather";
import styled from "styled-components";
import UserIconDropdown from "./UserIconDropdown";
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles **********************************************
 ***************************************************************************************************/
const defaultUserIcon = {
  css: { cursor: "pointer", userSelect: "none" },
  featherIcnSize: 48
};

const ImgUserIcon = styled.img`
  width: 30%;
  cursor: pointer;
  user-select: none;
`;

const DivUserIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 15px;
  left: -41px;
`;

/***************************************************************************************************
 ********************************************* Component ********************************************
 ***************************************************************************************************/

class HeaderUserIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  }

  toggleDropdown = () => {
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    const UserIcon =
      this.props.user.thumbnailUrl === "default" ? (
        <DivUserIcon>
          <FeatherUserIcn
            style={defaultUserIcon.css}
            size={defaultUserIcon.featherIcnSize}
            onClick={() => this.toggleDropdown()}
          />
          <UserIconDropdown
            username={this.props.user.username}
            isUserIconSelected={this.state.isSelected}
          />
        </DivUserIcon>
      ) : (
        <DivUserIcon>
          <ImgUserIcon
            src={this.props.user.thumbnailUrl}
            onClick={() => this.toggleDropdown()}
          />
          <UserIconDropdown
            username={this.props.user.username}
            isUserIconSelected={this.state.isSelected}
          />
        </DivUserIcon>
      );

    return UserIcon;
  }
}

// Login.propTypes = {
//   comment: PropTypes.objectOf(PropTypes.string)
// }

export default HeaderUserIcon;
