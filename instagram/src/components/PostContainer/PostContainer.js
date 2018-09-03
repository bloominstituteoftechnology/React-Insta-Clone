import React from 'react';
import Photo from './Photo';
import UserName from './UserName';
import Comments from '../PostContainer/Comments';
import Clickables from './Clickables';

function PostContainer(props) {

    return <div className="main-post">
        {props.newArr.map(data => {
            return (
                <div>
                    <UserName thumbnail={data.thumbnailUrl} name={data.username} />
                    <Photo mainPost={data.imageUrl} />
                    <div className="likesDiv"><Clickables likes={data.likes}/>
                    {data.comments.map(userComments => {
            return (
                <div>
                    <Comments comments={userComments} />
                </div>
            )
        })}
        </div>
                </div>
            )
        })}
    </div>

}

export default PostContainer;