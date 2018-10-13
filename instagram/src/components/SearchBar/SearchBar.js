import React from 'react';
import { Button } from 'reactstrap';
import { Input} from 'reactstrap';
import styles from "./SearchBar.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import instagram from "@fortawesome/fontawesome-free-brands/faInstagram";


{/* <FontAwesomeIcon icon="search"/> */}

class SearchBar extends React.Component{
    constructor(){
        super();
        this.state={

        }
    };

    render(){
        return(
            <nav>
                <div class="insta">
                <FontAwesomeIcon icon={instagram} />
                
                &ensp;|&ensp;
                  Instagram
                </div>

                <input type="text" placeholder="&#x1f50d; search"/>
                <div class="threenav">
            
                <FontAwesomeIcon icon="compass"/>
                &ensp;
                <FontAwesomeIcon icon="heart"/>
                &ensp;
                <FontAwesomeIcon icon="user"/>
                &ensp;
                </div>
            </nav>

        )
    }

}

export default SearchBar;