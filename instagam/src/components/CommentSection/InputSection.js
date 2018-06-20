import React from 'react';

// const InputSection = (props) => {
//     console.log('inputSection props: ', props)
//     return (
//         <div>
//             {/* <form onSubmit={this.clickButton}>  */}
//                 <input
//                     type='text'
//                     placeholder='add comment here...'
//                     name='comment'
//                     onChange={props.changeInput}
//                     />
//                 <input type="submit" value="Submit" onClick={props.clickButton(props.passedUrl)} />
//             {/* </form> */}
//         </div>
//     )
// }
 
// export default InputSection;

class InputSection extends React.Component {
    constructor(props) {
        console.log('inputSection props: ', props)
        super(props);
        this.state = { 
            comments: props.comments,
            text: '',
         }
    }
    handleChange = (e) => {
        console.log('e target value: ', e.target.value);
        this.setState({ text: e.target.value });
    }
    
    
    addcomment =(e) => {
    //   e.preventDefault();
    //   console.log('e: ', e)
    // //   console.log('url: ', url)
    //   // map over state - commentsData
    //   // if object.imgURL === url { push newObj into data.comments}
    //   // setState
    //   const newCommentsCopy=this.state.comment.slice();
      
    //   let arr; 
    //   let newObj={
    //       username: 'grej',
    //       text: this.state.text
    //   }
    //   newCommentsCopy.push(newObj)
    // //   newCommentsCopy.map(item => {
    // //     if(url === item.imageUrl){
    // //      arr = item.comments.slice(0, );
    // //     arr.push(newObj);
    // //       return arr;
    // //   }  null;
    // // })  
    // this.setState({ comment: newCommentsCopy, text: '' })

    e.preventDefault();
    const newComment = { text: this.state.text, username: 'DDD' };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, text: '' });
   
    
    }
      

    render() { 
     
        return (  
            <div>
            {/* <form onSubmit={this.clickButton}>  */}
            {this.state.comments.map((item, i) => {
              return(
                <div key={i}>
                    <p className="user"><strong>{item.username}</strong>
                    <span className="comment">    {item.text}</span></p>
      
    
                </div>
              ) 
            })}
              <input
                    type='text'
                    placeholder='add comment here...'
                    name='comment'
                    onChange={this.handleChange}
                    />
                    <button  value="Submit" onClick={this.addcomment} />
            {/* </form> */}
        </div>
        )
    }
}
 
export default InputSection;