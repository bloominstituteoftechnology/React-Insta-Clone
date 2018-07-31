import React from 'react';

const SearchBar = props => {
  let mag = {
    imageUrl: "https://image.freepik.com/icones-gratis/simples-lupa_318-31673.jpg"
  }
  return (
    <div className="search-main">
      <img className="icon insta-logo" src="https://png2.kisspng.com/sh/df8a0395466f98bb58a3d5b1e93afdfa/L0KzQYm3VMA6N5Zqj5H0aYP2gLBuTfNwdaF6jNd7LXnmf7B6Tfxwb5Cye95ycD3kgsW0if50fJJsitN2LXzyd7E0VfFkapRmfacBYXK0Q4W1VcY0OGg5TqM6NUK2Q4G8Ucg6PGQ8RuJ3Zx==/kisspng-computer-icons-logo-clip-art-instagram-logo-5acbcae56ab134.563074611523305189437.png" alt="insta-logo"></img>
      <img className="insta-logo-word" src="https://makersconnectdotorg2.files.wordpress.com/2013/12/instagram-word-only.png?w=848" alt="insta-logo-word"></img>

      <input img="https://image.freepik.com/icones-gratis/simples-lupa_318-31673.jpg" className="search-bar" placeholder=" &#x1F50D; Search"></input>

      <img className="icon compass-icon" src="https://image.flaticon.com/icons/svg/20/20043.svg" alt="compass-icon"></img>
      <img className="icon heart-icon" src="https://www.freepngimg.com/download/instagram/1-2-instagram-heart-transparent.png" alt="heart-icon"></img>
      <img className="icon profile-icon" src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-74-512.png" alt="profile-icon"></img>
      <p> &#9743;</p>
    </div>
  )
}

export default SearchBar;
