import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, Input} from 'reactstrap';
import './SearchBar.css';
import FontAwesome from 'react-fontawesome';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render () {
        return (
            <div className="Navbar " >
            	<ul className="Navbar instagram" role="navigation">
				    <li className=".fa-instagram"><i className="fa fa-instagram"></i></li>
				    <li className="instagram__logo">Instagram</li>
				    <li className="instagram">
				    	<form> <i className="fa fa-search"></i><input placeholder="search Instagram"/>
				    		
				    	</form>
				    	</li>
				    
				    <li className="fa fa-compass"></li>
				    <li className="fa fa-heart-o"></li>
				    <li className="fa fa-user"></li>
			  </ul>
                    
            </div>
        )
    }
}

export default SearchBar;