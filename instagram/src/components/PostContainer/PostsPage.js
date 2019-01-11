import React, { Component } from 'react';

import './PostPage.css';
import dummyData from "./../../dummy-data"
import PostContainer from "./PostContainer"
import SearchBar from "./../SearchBar/SearchBar"
import PropTypes  from "prop-types";
import StyledButton from "./StyledButton"
import Header from "./../SearchBar/Header"
import LogoImage from "./../SearchBar/LogoImage"
import LogoHeader from "./../SearchBar/LogoHeader"
import LogoImagePath from "./../../assets/instagramLogoImage.jpeg";
import LogoHeaderPath from "./../../assets/1200px-Instagram_logo.svg.png"
import rightHeaderImage from "../../assets/right_image.png"
import StyledSearchBar from "./../SearchBar/StyledSearchBar";

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            datas: [],
            filteredData: [],
            logouthandler  : props.logout
        }
    }

    //srarchHandler is called with a username whose post needs to be shown on the postPage.This means
    //PostPage needs to be rerendered with post of that particular username only. so, we update the
    //filterdata with post of that username. since we update the filter data with setState page the page
    //gets rerendered with filtered post.
    searchHandler=(username)=>{

        console.log("called with " + username);
        if (username.length == 0) {
            this.setState({filteredData:this.state.datas});
            return;//if no username show the entire data; page as it is
        }
        //thius filter returns array of post whose username matches with the username passed.
        const newFilterData= this.state.datas.filter(data =>{
            return data.username == username;
        })

        console.log("new data  " + newFilterData);
        this.setState({filteredData:newFilterData});
    }




//when usernmame is vacant all post should be seen.when filter is done using a given usernmae we see filtered post
    //if username is removed from search bar all post must comebnack; which means we aneed all the original data
    //for that datas is maintained which never changerd.
    componentDidMount(){
        this.setState({datas:dummyData,filteredData:dummyData})
        //need to mention that both datas and filter data were dummy data after that filtered data gets altered
    }

    logout = (event) => {
        console.log("Logout in button")
        event.preventDefault();
        this.state.logouthandler();
        this.setState({});
    }
    render() {
        return (
            <div className="App">

                <Header className="App-header">
                    <LogoImage src={LogoImagePath}/>
                    <LogoHeader src={LogoHeaderPath}/>
                    <SearchBar  search={this.searchHandler}/>
                    <LogoHeader src={rightHeaderImage}/>
                    <button onClick={this.logout}>Logout </button>

                </Header>

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

