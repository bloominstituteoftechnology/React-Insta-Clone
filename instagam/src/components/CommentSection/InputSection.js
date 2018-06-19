import React from 'react';

const InputSection = (props) => {
    console.log('inputSection props: ', props)
    return (
        <div>
            {/* <form onSubmit={this.clickButton}>  */}
                <input
                    type='text'
                    placeholder='add comment here...'
                    name='comment'
                    onChange={props.changeInput}
                    />
                <input type="submit" value="Submit" onClick={props.clickButton} />
            {/* </form> */}
        </div>
    )
}
 
export default InputSection;