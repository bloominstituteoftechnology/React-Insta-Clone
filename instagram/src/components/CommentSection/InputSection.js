// import React from 'react';


// class InputSection extends React.Component {
//     constructor(props) {
//         console.log('inputSection props: ', props)
//         super(props);
//         this.state = { 
//             comments: props.comments,
//             text: '',
//          }
//     }
//     handleChange = (e) => {
//         console.log('e target value: ', e.target.value);
//         this.setState({ text: e.target.value });
//     }
    
    
//     addcomment =(e) => {
//         e.preventDefault();
//         const newComment = { text: this.state.text, username: 'DDD' };
//         const comments = this.state.comments.slice();
//         comments.push(newComment);
//         this.setState({ comments, text: '' });
//     }
      

//     render() { 
     
//         return (  
//             <div className='inputArea'>
//                 {/* <form onSubmit={this.clickButton}>  */}
//                 {this.state.comments.map((item, i) => {
//                     return(
//                         <div key={i}>
//                             <p className="user"><strong>{item.username}</strong>
//                             <span className="comment">    {item.text}</span></p>
            
            
//                         </div>
//                     ) 
//                     })}
//                     <input
//                         type='text'
//                         placeholder='add comment here...'
//                         name='comment'
//                         onChange={this.handleChange}
//                     />
//                     <button  value="Submit" onClick={this.addcomment} />
//             </div>
//         )
//     }
// }
 
// export default InputSection;