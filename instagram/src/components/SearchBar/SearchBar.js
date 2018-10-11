import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class SearchBar extends React.Component{
    constructor(){
        super();
        this.state={

        }
    };

    render(){
        return(
            <nav>
            <Button color="danger">Danger!</Button>
            <FontAwesomeIcon icon="fainstagram" />

            </nav>

        )
    }

}

export default SearchBar;