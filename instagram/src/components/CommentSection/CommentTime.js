import React from 'react';
import moment from 'moment';

const CommentTime = props => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = '0';
    for (let i = 0; i < months.length; i++) {
        if (props.timestamp.includes(months[i])) {
            month += i + 1;
        }
    }

    let time = props.timestamp.replace('th', '').replace(months[month - 1], month);

    return <div className='time-commented'>{moment(time, "MMDDYYYY").fromNow()}</div>
}

export default CommentTime;