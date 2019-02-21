import React from 'react';
import { Container } from '../styles/PostContainerStyles'
import Post from './Post';

const SearchResult = (props) => {
  return ( 
    <Container>
        { props.users.map( user => <Post key={user.timestamp} user={user} /> ) }
    </Container>
   );
}
 
export default SearchResult;