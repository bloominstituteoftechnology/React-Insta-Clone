import React from "react";
import "./PostContainer.css";

const UserThumbnail = props => {
  return (
    <div className="thumbnail">
      <img
        className="thumbnail-img"
        src="https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg"
        alt="philzcoffee"
      />
      <p>{props.username}</p>
    </div>
  );
};

export default UserThumbnail;
