import React from 'react'; 
import styled from 'styled-components'; 

const Engagement = styled.div`
    width: 89.5%; 
    display: flex; 
    flex-direction: column;  
    margin: 0 auto;   
    border-right: 1px solid grey; 
    border-left: 1px solid grey; 
    box-sizing: border-box; 
    
`; 

const EngagementIcons = styled.div`
    text-align: left; 
    display: flex; 
    flex-direction: row;  
    width: 10%;  
    font-size: 1.5rem; 
    padding-top: 2%; 
    padding-left: 2%; 
    justify-content: space-between; 
`;

const LikesNumber = styled.div`
  text-align: left; 
  font-size: 1.5rem; 
  padding-left: 2%; 
  font-family: 'Pacifico', cursive;
`;

const Likes = props => {
    return (
        <Engagement>
            <EngagementIcons>
              <i className="far fa-heart" onClick={props.addLike}> </i>
              <i className="far fa-comment"></i>
            </EngagementIcons>

            <LikesNumber>{props.likes} likes </LikesNumber>
          </Engagement>
    )
}

export default Likes; 