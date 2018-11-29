
import {Heart} from 'styled-icons/feather/Heart';
import styled from 'styled-components'


const HeartImg = styled(Heart) `
  width: 21px;
  height: 21px;
  cursor: pointer;
  ${props => (props.post ? `
    width: 25px;
    height: 25px; ` : null)}
    ${props => (props.isLiked ? `
      fill: #ee0013;
      color: #ee0013;` : null)}
`
export default HeartImg;
