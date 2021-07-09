import React from 'react';
import ActionAnchor from '../Styles/Reusables/ActionAnchor';

const SearchBarActions = (props) => {
  return(
    <div className="search-bar-actions">
      <ActionAnchor explore href="explore">Explore</ActionAnchor>
      <ActionAnchor activity href="activity">Activity</ActionAnchor>
      {/* React doesn't seem to like the word 'profile,' so I'm using profileAction */}
      <ActionAnchor profileAction href="profile">Profile</ActionAnchor>
    </div>
  );
};

export default SearchBarActions;