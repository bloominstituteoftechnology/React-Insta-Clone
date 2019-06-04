import React from "react";
import searchBar from "./../../assets/ig_search_bar.png";
import styled from "styled-components";
import StyledSearchBar from "./StyledSearchBar"


class SearchBar extends React.Component {
      constructor(props){
          super(props);
          this.changeHandler=this.changeHandler.bind(this);
      }
     changeHandler=(event)=>{
          console.log("input")
        event.preventDefault();

       //now the searchHandler will be called with serach(username as event.target value)
       this.props.search(event.target.value)
     }
    render() {
        return <div>

            <StyledSearchBar  type="text" placeholder="Search posts by username" onChange={this.changeHandler} />

        </div>


    }
}
export default SearchBar