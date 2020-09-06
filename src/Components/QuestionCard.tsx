import React from 'react'
// import {QuestionType} from '../../types/quiz_types'
const QuestionCard:React.FC<any>= ({questions,  options
}) => 
{
    console.log(questions,options);
    return (
        <div className="question-container">
            <h1>Question Container</h1>
        </div>
    )
}

export default QuestionCard
