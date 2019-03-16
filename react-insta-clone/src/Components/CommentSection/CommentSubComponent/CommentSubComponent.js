import React from 'react';

const ComponentSubComponent = ( props ) =>
{
  return (
    <div>
      <p>{ props.data.username} { props.data.text }</p>
    </div>
  )
}

export default ComponentSubComponent;