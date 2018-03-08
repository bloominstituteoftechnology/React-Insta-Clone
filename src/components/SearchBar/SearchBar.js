import React from 'react';
// import { Image } from 'react-bootstrap';
// import { FieldGroup } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = () => {
  return (
      <div className="container">
        <span>
          <span className="instagramLogo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRo0P4SFoEGXk42eagPbi-OUGSwuIKiNmT_duNZWGQNyeIbOz" alt ="instagram logo" height="80" width="80"/></span>
          <span className="instagram"><img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2013/05/InstagramLogo-730x278.png" alt ="logo"height="80" width="180"/></span>
        </span>

        <span className="search"><input type="text" placeholder="Search.."/></span>

        <span className="right">
          <span><img src="https://image.flaticon.com/icons/svg/20/20043.svg" alt ="compass"height="60" width="60"/></span>
          <span><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-128.png" alt ="heart" height="70" width="70"/></span>
          <span><img src="http://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-icon.png" alt ="User!!!!!!!" height="60" width="70"/></span>
        </span>
      </div>
  );
}




export default SearchBar;