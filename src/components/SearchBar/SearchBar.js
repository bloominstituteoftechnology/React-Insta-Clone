import React, {Component} from 'react';
import './SearchBar.css';

    class SearchBar extends Component {

        state = {
            value: ""
        }

        componentDidMount() {
            this.setState((state)   =>  ({
                value: this.props.value
            }))
        }
        
        onChangeHandler =   ({ target })  =>  {
            this.props.filter(target.value)
        }

        render()    {
            return(
                <div className="searchBar">
               
                    <div class = "logo-wrapper">
                        <img class= "logo" src="http://i68.tinypic.com/ossryc.jpg" alt="instagram wordmark" />
                    </div>
                    <div className="search-box">
                         <input value={this.state.value} onChange={this.onChangeHandler} className="search" placeholder="Search"/>
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