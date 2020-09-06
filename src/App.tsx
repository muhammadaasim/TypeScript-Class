import React,{useEffect,useState} from 'react';
import './App.css';
import {getQuizDetails} from './services/quiz_service'
import {QuestionType} from '../types/quiz_types'
import QuestionCard from './Components/QuestionCard'
function App() {
  let [quiz,setQuiz]=useState<QuestionType[]>([])
  useEffect(() => {
   async function fetchData(){
      const questions:QuestionType[]= await getQuizDetails(5,'easy');
      console.log(questions);
      setQuiz(questions)
    }
    fetchData();
  },[]);
  return (
    <div className="App">
      <QuestionCard
      options={quiz[0].option}
      questions={quiz[0].question} 
      />
    </div>
  );
}

export default App;
