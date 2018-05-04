import React from 'react';
import { Card, CardBody, CardImg, Container,CardText } from 'reactstrap';

const CommentSection = props => {
    return(
        <div>
          {props.boo.map( (x,i) => <div key = {i}>
            
                <CardText>{x.username}</CardText>
                <CardText>{x.text}</CardText>
            
          </div>)}
          <input 
                    placeholder= "comments"
            />
          {/* why boooooooo? */}
            
        </div>
    );
}


export default CommentSection;