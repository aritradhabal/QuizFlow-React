import React from 'react'
import { useState } from 'react';
import { useOutletContext, useBlocker } from 'react-router-dom';

function GenerateLayout() {
    useBlocker(false);

    const question="Which character in 'Animal Farm' represents the working class?"
    const index = 1
    const answerA="Boxer"
    const answerB="Squealer"
    const answerC="Snowball"
    const answerD="Napoleon"
    const correctAnswer=1


    
  return (
    <>
        <div className="mt-10 w-full max-w-3xl mx-auto bg-white rounded-md border border-[#E2E8F0] p-4 sm:p-4 lg:p-6">
      {/* Question */}
      <div className="mb-2">
        <h2 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-2 leading-relaxed">
          {index}. {question}
        </h2>
        <p className="text-sm text-gray-600">Select the correct answer</p>
      </div>

      {/* Answer Options */}
      <div className="space-y-3 mb-1">
        {/* Answer A */}
        <div
          className={`flex items-center p-3 sm:p-4 border-1 rounded-lg transition-all duration-200 ${
            correctAnswer === 0 ? 'border-green-500 bg-green-50' : 'border-[#E2E8F0]'
          }`}
        >
          <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3 sm:mr-4 flex-shrink-0 transition-all duration-200 ${
            correctAnswer === 0 ? 'bg-green-500 text-white' : 'bg-[#E2E8F0]-100 text-gray-600'
          }`}>
            A
          </div>
          <span className="text-gray-800 text-sm sm:text-base leading-relaxed flex-1">
            {answerA}
          </span>
        </div>

        {/* Answer B */}
        <div
          className={`flex items-center p-3 sm:p-4 border-1 rounded-lg transition-all duration-200 ${
            correctAnswer === 1 ? 'border-green-500 bg-green-50' : 'border-[#E2E8F0]'
          }`}
        >
          <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3 sm:mr-4 flex-shrink-0 transition-all duration-200 ${
            correctAnswer === 1 ? 'bg-green-500 text-white' : 'bg-[#E2E8F0]-100 text-gray-600'
          }`}>
            B
          </div>
          <span className="text-gray-800 text-sm sm:text-base leading-relaxed flex-1">
            {answerB}
          </span>
        </div>

        {/* Answer C */}
        <div
          className={`flex items-center p-3 sm:p-4 border-1 rounded-lg transition-all duration-200 ${
            correctAnswer === 2 ? 'border-green-500 bg-green-50' : 'border-[#E2E8F0]'
          }`}
        >
          <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3 sm:mr-4 flex-shrink-0 transition-all duration-200 ${
            correctAnswer === 2 ? 'bg-green-500 text-white' : 'bg-[#E2E8F0]-100 text-gray-600'
          }`}>
            C
          </div>
          <span className="text-gray-800 text-sm sm:text-base leading-relaxed flex-1">
            {answerC}
          </span>
        </div>

        {/* Answer D */}
        <div
          className={`flex items-center p-3 sm:p-4 border-1 rounded-lg transition-all duration-200 ${
            correctAnswer === 3 ? 'border-green-500 bg-green-50' : 'border-[#E2E8F0]'
          }`}
        >
          <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3 sm:mr-4 flex-shrink-0 transition-all duration-200 ${
            correctAnswer === 3 ? 'bg-green-500 text-white' : 'bg-[#E2E8F0]-100 text-gray-600'
          }`}>
            D
          </div>
          <span className="text-gray-800 text-sm sm:text-base leading-relaxed flex-1">
            {answerD}
          </span>
        </div>
        </div>


        </div>
    </>
  );
};


export default GenerateLayout