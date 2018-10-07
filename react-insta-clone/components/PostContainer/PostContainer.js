import React from 'react';
import PropTypes from "prop-types";
import dummyData from "/..dummy-data";
import HeaderContainer from './HeaderContainer'

const PostContainer = props => {
  return (
  <div>
    <HeaderContainer dummyData={dummyData} />
  </div>
  );
};



export default PostContainer;
