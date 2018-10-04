import React, {Component} from 'react';
import './SearchBar.css';

    class SearchBar extends Component {
        render()    {
            return(
                <div className="searchBar">
               
                    <div class = "logo-wrapper">
                        <img class= "logo" src="http://i67.tinypic.com/mk7hg2.jpg" alt="instagram wordmark" />
                    </div>
                    <div>
                         <input type="text" placeholder= "Search" name= "search" />
                     </div>

                <div class="icon-wrapper">
                     <div className="social">
                            <i className="far fa-compass" />
                    </div>
                    <div className="social">
                             <i className="far fa-heart" />
                    </div>
                    <div className="social">
                          <i className="far fa-user-circle" />
                     </div>
                </div>
            </div>
            )
        }
    }

export default SearchBar;