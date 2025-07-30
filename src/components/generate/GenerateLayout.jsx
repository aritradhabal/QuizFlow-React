import React from 'react'
import { useState } from 'react';
import { useOutletContext, useBlocker } from 'react-router-dom';

function GenerateLayout() {
    useBlocker(false);
    
  return (
    <div>GenerateLayout</div>
  )
}

export default GenerateLayout