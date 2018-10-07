import React, {Component} from 'react';
import './SearchBar.css';


class SearchBar extends Component{

    handleChange = (event) =>{
        let searchText = event.target.value;
        this.props.searchPosts(searchText)
    }

    handleFocus = () =>{
        document.querySelector('.fa-search').style.display = 'none'
    }

    render(){

        return (
            <div className="sb-container">
                <div className="left">
                    <i className="fab fa-instagram"></i>
                    <p className="insta">Instagram</p>
                </div>
                <div className="middle">
                    <i className="fas fa-search"></i>
                    <input onFocus={this.handleFocus} onChange={this.handleChange} className="input" type="text" placeholder="                Search"/>
                </div>
                <div className="right">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </div>
            </div>
        )
    }

}
// const SearchBar = ({searchPosts}) =>{

//     const handleChange = (event) =>{
//         let searchText = event.target.value;
//         searchPosts(searchText)
//     }

//     return (
//         <div className="sb-container">
//             <div className="left">
//                 <i className="fab fa-instagram"></i>
//                 <p className="insta">Instagram</p>
//             </div>
//             <div className="middle">
//                 <i className="fas fa-search"></i>
//                 <input onChange={handleChange} className="input" type="text" placeholder="                Search"/>
//             </div>
//             <div className="right">
//                 <i className="far fa-compass"></i>
//                 <i className="far fa-heart"></i>
//                 <i className="far fa-user"></i>
//             </div>
//         </div>
//     )

// }

export default SearchBar;