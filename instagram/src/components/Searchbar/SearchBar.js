import React from 'react';
import 'instagram/src/components/Searchbar/SearchBar.css';

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
          <img className = 'compassIMG icons'/>
          <img className = 'hearrtIMG icons'/>
          <img className = 'personIMG icons'/>
        </div>

      </div> /* searchBar-container   */





      )



  }



}

export default SearchBar
