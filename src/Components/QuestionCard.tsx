import React from 'react'
import {questionPropsType} from '../../types/quiz_types'
const QuestionCard:React.FC<questionPropsType>= ({question,options }) => 
{
    console.log(question,options);
    return (
        <div className="question-container">
            <div className="question">
                {question}
            </div>
            <form>
                {
                    options.map((opt:string, ind:number)=>{
                    return(
                        <label>
                            <input type="radio" name="opt" value={opt}/>
                        {opt}                    
                        </label>
                    )
                    }
                    )
                }
                <input type="submit" />
            </form>
        </div>
    )
}

export default QuestionCard
