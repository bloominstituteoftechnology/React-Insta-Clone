import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  render () {
    return (
      <div className = 'searchBar-container'>
        <div className = 'imageLOGO-container'>
          <img className = 'cameraIMG icons'  src = 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1909558/300/200/m1/fpnw/wm0/camera-thin-line-icon-01-.jpg?1479381787&s=6df90e9016794e8c8181458f469d3e83' alt = 'instagramIMAGE'  />
          <p className = 'instagramLOGO'> Instagram</p>
        </div>

        <div className = 'searchInput-container'>
          <input name = 'search' className = 'searchInput' />
        </div>

        <div className = 'littleIcons'>
          <img className = 'compassIMG icons'src = 'http://simpleicon.com/wp-content/uploads/compass-1.png'   alt = 'compass'/>
          <img className = 'heartIMG icons'  src = 'https://image.freepik.com/free-icon/heart-outline_318-32415.jpg' alt = 'heart'/>
          <img className = 'personIMG icons'   src = 'https://banner2.kisspng.com/20180420/twe/kisspng-computer-icons-user-profile-symbol-person-vector-5ada64c43ea7b6.8779413315242620842567.jpg' alt = 'person' />
        </div>

      </div> /* searchBar-container   */





      )



  }



}

export default SearchBar
