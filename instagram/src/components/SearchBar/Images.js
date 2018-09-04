import React from 'react';
import gramIcon from '../../logos/gramcam.png'
import gramText from '../../logos/gramtext.png'

function Images(props) {
    return <div className="headerImages">
    <img src={gramIcon} alt="gramIcon" height='30' width= '30' />
    <img src={gramText} alt="gramText" height='30' width= '100' />
    </div>
}

export default Images;