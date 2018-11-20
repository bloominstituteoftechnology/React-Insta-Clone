import React from 'react';
import { User as FeatherUserIcn } from 'react-feather';
import styled from "styled-components";
// import PropTypes from 'prop-types';

/***************************************************************************************************
********************************************** Styles **********************************************
***************************************************************************************************/
const defaultUserIcon = {
  css: {cursor: 'pointer'},
  featherIcnSize: 48
}

const ImgUserIcon = styled.img`
  width: 20%;
  cursor: pointer
`;

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
const HeaderUserIcon = props => {
  const UserIcon = props.user.thumbnailUrl === 'default' ?
    <FeatherUserIcn style={defaultUserIcon.css} size={defaultUserIcon.featherIcnSize} /> :
    <ImgUserIcon src={props.user.thumbnailUrl} />;

  return UserIcon;
}

// Login.propTypes = {
//   comment: PropTypes.objectOf(PropTypes.string)
// }

export default HeaderUserIcon;