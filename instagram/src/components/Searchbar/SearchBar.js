import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  render () {
    return (
      <div className = 'searchBar-container'>
        <div className = 'imageLOGO-container'>
          <img className = 'cameraIMG icons'  src = 'https://us.123rf.com/450wm/sanek13744/sanek137441608/sanek13744160800077/60838911-stock-vector-instagram-icon-hipster-camera-social-media-vector-flat-illustration-black-icons-on-white-background-.jpg?ver=6' alt = 'instagramIMAGE'  />
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
