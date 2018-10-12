import React, { Component } from 'react';
import {
    CardImg,
    Card,
    CardTitle,
   
  } from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';




class PostContainer extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }



render(){
    return (
        
            <Card>
                {this.props.datas.map((dataEach) =>
                <div>
                <CardTitle>
                        <img src={dataEach.thumbnailUrl}/><p>{dataEach.username}</p>
                </CardTitle>
                <CardImg top width="100%" src={dataEach.imageUrl} alt="Card image" />
                <CommentSection dummyData={this.props.dummyData} dataEach={dataEach} />
                </div> )}   
            </Card>
        
    ) 
         
};
}


export default PostContainer;

