import styled, { css } from 'styled-components'

const Div = styled.div`

${props =>
                props.fade ? css`
        width: 100vw;
        height: 100vh;
        background: #00000095;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
`       :
                        props.login ? css`
        width: 50vw;
        height: max-content;
        background: whitesmoke;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        box-shadow: 5px 10px 15px;
        border: 2px solid #b1b1ff;
        border-radius: 15px; 
        padding: 33.5px 0;
        font-size: 1.5rem;
`       :
                                props.App ? css`
        max-width: 640px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;
`       :
                                        props.post ? css`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border: 2px solid #b1b1ff;
        margin: 15px 0;
        background: whitesmoke;
        border-radius: 5px;
        box-shadow: 5px 10px 30px;
`       :
                                                props.head ? css`
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 15px;
`       :
                                                        props.cAndL ? css`
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 640px;
`       :
                                                                props.cont ? css`
        display: flex;
`       :
                                                                        props.comments ? css`
        width: 100%;
        border-top: 1px dotted #b1b1ff;
        margin-top: 15px;
        padding: 15px 0;
        background: #b1b1ff25;
        border-radius: 0 0 5px 5px;
`       :
                                                                                props.addComment ? css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        color: #a8a8a8;
        border-top: 1px dotted #b1b1ff;
        font-size: 1.2rem;
`       :
                                                                                        props.likes && css`
        width: 100%;
        padding: 0 0 15px 15px;
        font-weight: 500;
        font-size: 2rem;
        `}
`

export default Div;