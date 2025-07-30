import React, { useState } from 'react'
import HomePage from './components/HomePage'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import RootLayout from './layout/RootLayout';
import CustomizeLayout from './components/customize/CustomizeLayout';
import GenerateLayout from './components/generate/GenerateLayout';
import Protected_customizeLayout from './layout/ProtectedLayout';
import Protected_generateLayout from './layout/ProtectedLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<HomePage/>}/>
        <Route path='/create' element={<HomePage/>}/>
        
        <Route path='/customize' element={
          <Protected_customizeLayout>
            <CustomizeLayout/>
          </Protected_customizeLayout>
        } />
        <Route path='/generate' element={
          <Protected_generateLayout>
            <GenerateLayout/>
          </Protected_generateLayout>
        } />
        

      </Route>
    )
  )
  return (
      <RouterProvider router={router}/>
  )
}

export default App;