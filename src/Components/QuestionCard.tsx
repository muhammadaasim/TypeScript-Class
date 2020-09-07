import React, { useState } from 'react'
import { questionPropsType } from '../../types/quiz_types'
import '../App.css'
const QuestionCard: React.FC<questionPropsType> = ({ question, options, callback }) => {
    let [selectedAns,setSelectedAns]=useState("");
    const handleSelection=(ev: any)=>{
        setSelectedAns(ev.target.value)  
    }
    return (
        <div className="question-container">
            <div className="question">
                {question}
            </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAns)}>
                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div className="q-card" key={ind}>
                                <label>
                                    <input type="radio" name="option" value={opt} onChange={handleSelection} checked={selectedAns===opt} required/>
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
