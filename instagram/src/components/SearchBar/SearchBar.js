import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className='searchBar'>
                <div className='logo'>
                    <i className="fab fa-instagram"></i>
                    <img src='http://www.stickpng.com/assets/images/5a4e432a2da5ad73df7efe7a.png' alt='Instagram logo text'/>
                </div>
                <div className='search'>
                    <input placeholder='&#x1F50D; Search'/>
                </div>
                <div className='buttons'>
                    <i className="fas fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </div>
            </div>
        )
    }
}


export default SearchBar