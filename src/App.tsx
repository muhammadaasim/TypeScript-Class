import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/quiz_service'
import { QuestionType } from '../types/quiz_types'
import QuestionCard from './Components/QuestionCard'
function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(5, 'easy');
      setQuiz(questions)
    }
    fetchData();
  }, []);
  if (!quiz.length)
  return <h3>Loading ...</h3>
  const handleSubmit = (e: React.FormEvent<EventTarget>, userans: string) => {
    e.preventDefault();
    if (quiz[currentStep].answer === userans) {
      setScore(++score);
    }
    if(currentStep!==quiz.length-1)
    setCurrentStep(++currentStep);
    else{
    alert("Quiz Complted");
      setCurrentStep(0)
      alert("You have scored : "+score)
      setScore(0);
  }
  }
  return (
    <div className="App">
      <QuestionCard
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
