import React from 'react'
import {questionPropsType} from '../../types/quiz_types'
import '../App.css'
const QuestionCard:React.FC<questionPropsType>= ({question,options,callback}) => 
{
    console.log(question,options);
    return (
        <div className="question-container">
            <div className="question">
                {question}
            </div>
            <form onSubmit={callback}>
                {
                    options.map((opt:string, ind:number)=>{
                       return(
                           <div className="q-card" key={ind}>
                        <label>
                            <input type="radio" name="opt" value={opt}/>
                        {opt}                    
                        </label>
                        </div>
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
