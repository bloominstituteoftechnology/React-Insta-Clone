import React from "react";
import searchBar from "./../../assets/ig_search_bar.png"
class SearchBar extends React.Component {
      constructor(props){
          super(props);
          this.changeHandler=this.changeHandler.bind(this);
      }
    changeHandler=(event)=>{
          console.log("input")
        event.preventDefault();
       this.props.search(event.target.value)
     }
    render() {
        return <div><input type="text" placeholder="Search Bar"
                           onChange={this.changeHandler} style={{width: "100%"}}/></div>

    }
}
export default SearchBar