import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer/postContainer';



const App = () => {
 
  return (
    <div className="App">
      <header className="App-header">
        
        
          
        {dummyData.map(data => {
        
        return <div><PostContainer key={data.id} data={data} /></div>
      })}
      
    
      
       
         
        
      </header>
    </div>
  );
  }

export default App;
