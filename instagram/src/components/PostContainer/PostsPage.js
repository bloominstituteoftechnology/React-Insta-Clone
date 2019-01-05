import React, { Component } from 'react';

import './PostPage.css';
import dummyData from "./../../dummy-data"
import PostContainer from "./PostContainer"
import SearchBar from "./../SearchBar/SearchBar"
import PropTypes  from "prop-types";

class PostsPage extends Component {
    constructor() {
        super();
        this.state= {
            datas: [],
            filteredData: []
        }
    }
    searchHandler=(username)=>{

        console.log("called with " + username);
        if (username.length == 0) {
            this.setState({filteredData:this.state.datas});
            return;
        }
        const newFilterData= this.state.datas.filter(data =>{
            return data.username == username;
        })
        console.log("new data  " + newFilterData);
        this.setState({filteredData:newFilterData});
    }

    componentDidMount(){
        this.setState({datas:dummyData,filteredData:dummyData})
    }
    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <SearchBar  search={this.searchHandler}/>
                </header>
                {
                    this.state.filteredData.map(data =>{
                        return <PostContainer  key={data.id} data={data}/>
                    })
                }


            </div>
        );
    }
}

export default PostsPage;

