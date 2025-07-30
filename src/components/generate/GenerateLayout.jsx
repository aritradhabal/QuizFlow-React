import React from 'react'
import { useState } from 'react';
import { useOutletContext, useBlocker } from 'react-router-dom';

function GenerateLayout() {
    useBlocker(false);
    
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-6 lg:p-8">
      {/* Question */}
      <div className="mb-6">
        <h2 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3 leading-relaxed">
          Question
        </h2>
        <p className="text-sm text-gray-600">Select the correct answer</p>
      </div>

    

      {/* Validation Section */}
      <div className="border-t border-gray-200 pt-4">
        <button className="text-blue-600 hover:text-blue-800 text-sm underline transition-colors duration-200">
          Validate answer with Google search
        </button>
      </div>
    </div>
  )
}

export default GenerateLayout