import React from 'react'
import moment from 'moment'
import {ContainerDiv} from '../Styles'

const Timestamp = props => {
  return (
    <ContainerDiv timestamp>
      <p>{moment(props.timestamp, 'MMMM Do YYYY h:mm:ss a').fromNow().toUpperCase()}</p>

    </ContainerDiv>
  )
}


export default Timestamp;
