import React, {Component} from 'react'
import './SearchBar.css'
import PostContainer from '../PostContainer/PostContainer'


class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            data:props.allData,
            newSearch:'',
            searchData: [],
        }
        // console.log(this.state.data)
    }
    
    newSearchInput = (event) =>{
        this.setState({newSearch:event.target.value})
        console.log(this.state.newSearch)
    }
    filterSearch = (event) => {
        event.preventDefault();
        let filteredData = this.state.data.filter(obj => obj.username === this.state.newSearch);
        // console.log(filteredData)
        this.setState({searchData:filteredData,newSearch:''});
        // console.log(this.state)
    }
    
    
    render(){
        return (
            <div>
            <div className='Searchbar'>
            <form onSubmit={this.filterSearch}>
                <input onChange={this.newSearchInput} type='text' placeholder='Search' value={this.state.newSearch}/>
            </form>
            </div>
            {this.state.searchData.length ? 
            <div>
            {this.state.searchData.map((obj)=> 
                <PostContainer postData={obj} />
               )}
            </div> :
            <div>
            {this.state.data.map((obj,index)=> {
                return <PostContainer postData={obj} key={index} />
               })}
            </div>
            }
            
            </div>   
        )
    }

}

export default SearchBar