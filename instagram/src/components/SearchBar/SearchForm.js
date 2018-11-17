import React from "react";
import './SearchBar.css';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: "",
        }
    }






    render() {
        return (
            <form onSubmit={console.log("onsubmit")}>
                 <input 
                     className="search-box" 
                     name="searchText"
                     type="text" 
                     size="40" 
                     value={this.state.searchText}
                     placeholder="Add a comment..."
                     onChange={props.handleChange}>
                 </input> 
             </form>
         )


    }
    
}

export default SearchForm;