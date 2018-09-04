import React from 'react';
import logo from './food-post.jpg'

const PostedImage = () => {
  return ( 
    <div>
      <div>
        <img src={logo} className="posted-image-logo" alt="posted-image-logo" />
      </div>

      <div className="two-icons">
        <section>
          <i className="far fa-heart"></i>
        </section>
        <section>
          <i className="far fa-comment"></i>
        </section>
      </div>

      <div className="likes">
        <div>373 likes</div>
      </div>
    </div>
   );
}
 
export default PostedImage;