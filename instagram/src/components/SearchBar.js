import React from 'react';

class SearchBar extends React.Component{
    constructor(){
        super();
        this.state={
            searchInput:''
        };
    }

Submit=event=>{
    event.preventDefault();
    this.setState({
        searchInput:''
    });
}
Input=event=>{
    this.setState({searchInput: event.target.value});
}
    render(){ 
        return(
            <container>
            <navbar>
                 <div>
                
                <span>instagram</span>
                </div>
                <form>
                    <input placeHolder="Search"value={this.state.searchInput}onChange={this.Input}/>
                </form>
                <nav></nav>
            </navbar>
            </container>
    )
    }
}
export default SearchBar;