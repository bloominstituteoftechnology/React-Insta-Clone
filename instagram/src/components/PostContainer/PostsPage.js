import React from 'react';
import PostContainer from './PostContainer'
import { dummyData } from '../../data/dummy-data'
import SearchContainer from '../SearchContainer/SearchContainer'
import Styled from 'styled-components';
import {Spacer} from '../Styled/Styled'


const MainPostContainer = Styled.div`
    padding-top:80px;
`

class PostsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            newComment:'',
            likes:'',
            searchText:''
        }
    }
    handleSearchChange = event =>{
        this.setState({searchText:event.target.value})
    }
    handleSearchSubmit = event =>{
        event.preventDefault();
        this.setState({data:this.state.data.filter(element=>{
            if(element.username.includes(this.state.searchText)) {return element}
        })},this.setState({searchText:''}))
    }    
    componentDidMount(){
        let data = JSON.parse(localStorage.getItem('igData'))
        if(data){
            this.setState(
                    {
                        'data':data
                    }
                )
        } 
        else{
            this.setState(
                {
                    'data':dummyData
                }
            )    
        }
    }
    addNewComment = (event) =>{
        event.preventDefault();
        let postId = event.target[0].id;
        let myDataObj = [...this.state.data];
        myDataObj[postId].comments.push(
        {username:'Frank-E-B',
        'text': event.target[0].value}
        )
        this.setState({data: myDataObj,newComment:''},this.saveData)
    }
    handleCommentChange = event =>{
        this.setState({newComment:event.target.value})
    }
    saveData(){
        localStorage.setItem('igData',JSON.stringify(this.state.data))
    }            
    render(){
        return(
            <div>
                <SearchContainer 
                    handleSearchSubmit={this.handleSearchSubmit}
                    handleSearchChange={this.handleSearchChange}
                    searchText={this.state.searchText}
                    logout={this.props.logout}
                />
                <MainPostContainer>
                    {
                    this.state.data.map((element,index) => {
                        return(
                        <div>
                            <PostContainer  
                                        handleLogin = {this.handleLogin}
                                        saveData={this.saveData} 
                                        key={index} 
                                        id={index} 
                                        postId={index} 
                                        data={element}
                                        handleCommentChange = {this.handleCommentChange}
                                        handleLikeClick = {this.handleLikeClick}
                                        addNewComment = {this.addNewComment}
                                        newComment = {this.state.newComment}
                                        removeComment = {this.removeComment}


                            />
                            <Spacer>&nbsp;</Spacer>
                        </div>
                            )
                    })
                    }
                </MainPostContainer>
            </div>
        )
    }
}

export default PostsPage;