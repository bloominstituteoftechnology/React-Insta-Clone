import React, {Component} from 'react';
import './SearchBar.css';

    class SearchBar extends Component {
        render()    {
            return(
                <div className="searchBar">
               
                    <div class = "logo-wrapper">
                        <img class= "logo" src="https://vignette.wikia.nocookie.net/logopedia/images/a/aa/Instagram_wordmark.svg/revision/latest?cb=20140110161419" alt="instagram wordmark" />
                    </div>
                    <div>
                         <input type="text" placeholder= "Search" name= "search" />
                         
                         <div className="search">
                         <i class="fa fa-search"></i>
                         </div>
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