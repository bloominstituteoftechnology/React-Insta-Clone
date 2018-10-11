import React from 'react'
import {Search} from 'styled-icons/feather/Search';
import styled from 'styled-components'

// const SearchIcon = () => {
//   return (
//       <Search  className='search-icon'/>
//   )
// }
//
// export default SearchIcon;

const SearchIcon = styled(Search)`
  width: 11px;
  height: 11px;
  transform: translate(15px, -2px);
`

export default SearchIcon;
