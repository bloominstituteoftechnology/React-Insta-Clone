import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js'
import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

const headerImgStyles = {
  display: 'flex',
  // paddingLeft: 0
  textAlign: 'left',
  justifyContent: 'end'

}

const iconStyles = {
  width: '32px',
  height: '32px',
  borderRadius: '16px'
}

const headerStyles = {
  paddingLeft: '20px',
  paddingTop: '5px'
}

const imageStyles = {
  // maxWidth: '600px'
  width: '100%',
  // marginBottom: 20
}

const likesStyles = {
  // marginTop: 20,
  display: 'inline-flex',
  justifyContent: 'start',
  // paddingLeft: '20px',
  width: '100%',
  // border: '2px solid yellow'
}
const likeSpecific = {
  justifyContent: 'start',
  fontWeight: 'bold',
  width: '20%',
  // border: '2px solid red',
  height: 20,
  // border: '2px solid green'
}
const cardStyle = {
  marginBottom: 20,
  marginTop: 20,
  // border: '5px solid magenta'
}
const PostContainer = props => {
  return (
    <div>
      <Card style={cardStyle}>
        <CardBody  >
        <CardTitle style={headerImgStyles} >
          <img style={iconStyles}  src={props.data.thumbnailUrl} alt="thumbnail" />
          <h5 style={headerStyles}>{props.data.username}</h5>
        </CardTitle>
          <img  src={props.data.imageUrl} style={imageStyles} alt="main" />
        {/* <CardSubtitle style={likesStyles}> */}
        <div style={likeSpecific} >{props.data.likes + " Likes"}    </div>
        <CommentSection

          change={props.change}
          submit={props.submit}
          comments={props.data.comments}
          value={props.value} />
          {/* </CardSubtitle> */}
          </CardBody>
      </Card>
    </div>
  );
}

export default PostContainer;

// const PostContainer = props => {
//   return (
//     <div>
      
//         <div style={headerImgStyles}>
//           <img style={iconStyles} src={props.data.thumbnailUrl} alt="thumbnail" />
//           <h5 style={headerStyles}>{props.data.username}</h5>
//         </div>
//         <div>
//           <img style={imageStyles} src={props.data.imageUrl} alt="main" />
//         </div>
//         <div style={likesStyles}><p>{props.data.likes} Likes</p></div>
//         <CommentSection
//           change={props.change}
//           submit={props.submit}
//           comments={props.data.comments}
//           value={props.value} />
    
//     </div>
//   );
// }