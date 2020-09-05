import React,{UseEffect} from 'react';
import './App.css';
import {getQuizDetails} from './services/quiz_service'
function App() {
  UseEffect(() => {
    getQuizDetails(5,'easy');
  },[]);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
