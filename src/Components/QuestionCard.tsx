import React from 'react'
import {questionPropsType} from '../../types/quiz_types'
const QuestionCard:React.FC<questionPropsType>= ({question,options }) => 
{
    console.log(question,options);
    return (
        <div className="question-container">
            <h1>Question Container</h1>
        </div>
    )
}

export default QuestionCard
