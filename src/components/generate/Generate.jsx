import React from 'react'
import GenerateLayout from './GenerateLayout'

function Generate() {
    const data = {
        0: {
            question: "Which character in 'Animal Farm' represents the working class?",
            index: 0,
            answerA: "Boxer",
            answerB: "Squealer",
            answerC: "Snowball",
            answerD: "Napoleon",
            correctAnswer: 3
        },
        1: {
            question: "What is the main theme of 'Animal Farm'?",
            index: 1,
            answerA: "The dangers of totalitarianism",
            answerB: "The importance of education",
            answerC: "The value of hard work",
            answerD: "The benefits of capitalism",
            correctAnswer: 0
        }
    }
    return (
    <>
    <div className='max-h-[calc(100svh-6.25rem)] overflow-y-auto grid space-y-5 p-4'>
        <GenerateLayout
        data={data[0]}
        />
        <GenerateLayout
        data={data[1]}
        />
        <GenerateLayout
        data={data[1]}
        />
        <GenerateLayout
        data={data[1]}
        />
    </div>
    </>
  )
}

export default Generate