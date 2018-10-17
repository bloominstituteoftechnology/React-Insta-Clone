import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import PostHeader from './PostHeader';
import LikeSection from './LikeSection';
import CommentContainer from '../CommentSection/CommentContainer'


const PostPage = (props) => {
    return(


        <div className='cmntSectionDiv'>
        {props.data.map(item => 
        <div>

              <PostHeader username={item.username} avatar={item.thumbnailUrl} />
               <Post post={item.imageUrl} />
               <LikeSection likes={item.likes} />
               <CommentContainer data={props.data} comments={item.comments} 

               />
        </div>
      
       
        )}



        </div>
    )
}
// const PostPage = (props) => {
//         return(
//             <div>
//             {props.data.map(item => 
            
//             <PostHeader key={item.username}
            
//             avatar={item.imageUrl} 

//             username={item.username}


                
//             /> )};

//             {props.data.map(item => <Post key={item.username} comments={item.comments.map( item =>
//             <div key={item.index}>item.username
//             item.text
            
//             </div>
            
//             )} />)};

//             {props.data.map(item => <LikeSection likes={item.likes} />)}
                
//             </div>
//         )
// }

export default PostPage 