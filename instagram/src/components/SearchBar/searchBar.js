import React from 'react';
import "./SearchBar.css";

class SearchBar extends React.Component  {
    constructor(props){
    super(props)
    this.state = {
        dummyData: props.dummyData,
        input: '',
        placeholder: "&#xf002; Search"
    };
}

changeSearch = event => this.setState ({input: event.target.value})

// newSearch = (event, i) => {
//     event.preventDefault();
//     let search = this.state.dummyData.username.slice();
//     search =search.filter(item =>);
    
//     // const search = this.state.dummData.slice();
//     // search.push({ text: this.state.input, username: "Sag" });
//     // this.setState({
//     //   comments,
//     //   input: "",
      
//     });
//   };

render(){
    return (
        <div onSubmit={this.newSearch}className="search-bar"> 
            <p>Instagram </p>
            <input className="fa" type="text" onChange={this.changesearch} placeholder="&#xf002; Search" value={this.state.value}/>
             </div>
    )
}
}
 
export default SearchBar;

// class PostContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dummyData: props.dummyData,
//       likes: props.dummyData.likes
//     };
//   }