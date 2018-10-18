import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(){
        super();
        this.state = {
            searchValue: ''
        }
    }

    componentDidMount() {
        this.setState(state => ({
            searchValue: this.props.value,
        }))
    }

    inputChangeHandler = e => {
        this.props.filter(e.target.value)
    }

    render(){
        return (
            <div className="searchbar-container">
                {/*Instagram Icon*/}
                <i className="instagram-logo fa fa-instagram fa-2x"></i>
                <div className="divider"></div>
                {/*Instagram logo font: Billabong*/}
                <p className="instagram-letter-logo">Instagram</p>
                {/*Search bar*/}
                <div className="search-area">
                    <form> 
                        <input type="text" placeholder="&#x1F50D; Search" className="search-input" onChange={this.inputChangeHandler} value={this.state.Searchvalue}/>
                    </form>
                </div>
                
                {/*3 icons on the right*/}
                <div className="rigth-container">
                    <div className="rigth-icon-container">
                        <i className="far fa-compass"></i>
                        <i className="far fa-heart"></i>
                        <i className="far fa-user"></i>
                    </div> 
                </div>
            </div>
        )
    }
}

export default SearchBar;