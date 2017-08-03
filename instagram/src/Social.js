import React from 'react';
import './Social.css';

// TODO Properly use state to store data. Also make clicking the comment button light up/select the comment field.

let likes;
const Social = (data) => { // Probably not proper form to pass the num of likes as a prop.. How would I do this instead?
  likes = data.likes;
  return (
    <div className="social">
      <div className="interact">
        <img id="like" src="http://i.imgur.com/u21vaOo.png" alt="Like"/>
        <img src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Chat_bubble-128.png" alt="Comment" />
      </div>
      <p>{likes} likes</p>
    </div>
  )
}

window.onLoad = function() {
  document.getElementById('like').onclick = function() {
    console.log("incremeing");
    let currLikes = likes + 1;
    Social({likes: currLikes});
  }
}

export default Social;
