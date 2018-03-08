import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { FieldGroup } from 'react-bootstrap';
import '../css/SearchBar.css';

class SearchBar extends Component {
    constructor() {
        super();
        // this.state
    }

    render () {
        return (
            <div class="container">
              <span class="left">
                <span class="instagramLogo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRo0P4SFoEGXk42eagPbi-OUGSwuIKiNmT_duNZWGQNyeIbOz" height="80" width="80"/></span>
                <span class="instagram"><img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2013/05/InstagramLogo-730x278.png" height="80" width="180"/></span>
              </span>

              <span class="search"><input type="text" placeholder="Search.."/></span>
                
                <span class="right">
                    <span class="compass"><img src="http://images.gofreedownload.net/compass-symbol-6425.jpg" height="60" width="60"/></span>
                    <span class="heart"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-128.png" height="70" width="70"/></span>
                    <span class="user"><img src="http://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-icon.png" height="60" width="70"/></span>
                </span>
            </div>
        );
    }

}


export default SearchBar;