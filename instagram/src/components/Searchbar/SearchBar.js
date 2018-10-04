import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  render () {
    return (
      <div className = 'searchBar-container'>
        <div className = 'imageLOGO-container'>
          <img className = 'cameraIMG'  alt = 'instagramIMAGE'  />
          <p className = 'InstagramLOGO'> Instagram</p>
        </div>

        <div className = 'searchInput-container'>
          <input name = 'search' className = 'searchInput' />
        </div>

        <div className = 'littleIcons'>
          <img className = 'compassIMG icons' alt = 'compass'/>
          <img className = 'hearrtIMG icons' alt = 'heart'/>
          <img className = 'personIMG icons'  alt = 'person' />
        </div>

      </div> /* searchBar-container   */





      )



  }



}

export default SearchBar
