import React from "react";
import LoggedInUser from "./LoggedInUser";
import Stories from "./Stories";
import { connect } from "react-redux";

const SideBarContainer = props => {
  return (
    <div className="side-bar">
      <LoggedInUser
        username={window.localStorage.username}
        fullName={window.localStorage.fullName}
      />
      <Stories />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state
});
export default connect(mapStateToProps)(SideBarContainer);
