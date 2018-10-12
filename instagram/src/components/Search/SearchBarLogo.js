import React from 'react';
import { SBLogo, SBhr } from './../Styled/styled';

class SearchBarLogo extends React.Component {
  render() {
    return (
      <SBLogo>
        <i className="fab fa-instagram" />
        <SBhr />
        <i className="fab fa-aviato" />
        {/* <i className="fab fa-hooli" /> */}
      </SBLogo>
    );
  }
}

export default SearchBarLogo;
