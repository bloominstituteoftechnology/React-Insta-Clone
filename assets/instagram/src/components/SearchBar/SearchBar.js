import React from 'react';
// import PropTypes from 'prop-types';
// import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';




class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernames: props.usernameInfo.map(un => {
                return un.username;
            }),
            
            searchTerm: ""
        }
    }

    

    updateSearch(event){
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value});
    }

    render(){
        let filteredPosts = this.state.usernames.filter(
            (username) => {
                return username.indexOf(this.state.searchTerm) !== -1;
            }
        );
        console.log(this.state.usernames);
        return(

            <div className = "search-master-cont">
            <section className = "line-break">
                <hr/>
            </section>

            <div className = "search-cont">

            <section className = "img-container">
            {/* <img src = '#' alt = "insta-cam"/> border-right  */}
            <i className="fab fa-instagram"></i>
            <img className = "instagram-text" src = "#" alt = "instagram"/>
            </section>

            <section className = "search-container">
                <input 
                type = "text" 
                name = "searchTerm"
                placeholder = "Search"
                value={this.state.searchTerm}
                onChange={this.updateSearch.bind(this)}
                />
            </section>

            <section className = "int-buttons-cont">
            <img src = '#' alt = "Compass"/>
            <img src = '#' alt = "Heart"/>
            <img src = '#' alt = "Person"/>
            </section>

            </div>

            <section className = "line-break">
                <hr/>
            </section>
        </div>
        )
    }
}

// const SearchBar = () => {
//     return (
//         <div className = "search-master-cont">
//             <section className = "line-break">
//                 <hr/>
//             </section>

//             <div className = "search-cont">

//             <section className = "img-container">
//             {/* <img src = '#' alt = "insta-cam"/> border-right  */}
//             <i className="fab fa-instagram"></i>
//             <img className = "instagram-text" src = "#" alt = "instagram"/>
//             </section>

//             <section className = "search-container">
//                 <input 
//                 type = "text" 
//                 placeholder = "Search"
//                 value="Level Up"
//                 />
//             </section>

//             <section className = "int-buttons-cont">
//             <img src = '#' alt = "Compass"/>
//             <img src = '#' alt = "Heart"/>
//             <img src = '#' alt = "Person"/>
//             </section>

//             </div>

//             <section className = "line-break">
//                 <hr/>
//             </section>
//         </div>
//     );
// }

export default SearchBar