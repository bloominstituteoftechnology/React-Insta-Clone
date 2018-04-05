import React from 'react'
import './SearchBar.css'
import user from './user.png'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faCamera from '@fortawesome/fontawesome-free-solid/faHeart'
export default class SearchBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="SearchBar">
            <h1 className="SearchBar__title">Lambdagram</h1>
            <input 
            type="text" 
            placeholder=" 🔍 Search"
            value={this.props.searchText}
            onChange={this.props.handleSearch} />

            {/*<div className="SearchBar__actions">*/}
              {/*<img src={user} alt="User" />*/}
              <FontAwesomeIcon icon={faCamera} size='2x'/>
                <FontAwesomeIcon  icon={faUser} size='2x' />
            {/*</div>*/}

          </div>
        );
    }
}
