import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100px;
`

const TreeIcons = () => {
  return ( 
    <Wrapper>
      <section>
       <i className="far fa-compass"></i>
      </section>

      <section>
      <i className="far fa-heart"></i>
      </section>

      <section>
      <i className="far fa-user"></i>
      </section>

    </Wrapper>
   );
}
 
export default TreeIcons;