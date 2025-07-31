import React, { useState } from 'react'
import Home from './components/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import RootLayout from './layout/RootLayout';
import CustomizeLayout from './components/customize/CustomizeLayout';
import GenerateLayout from './components/generate/GenerateLayout';
import Protected_customizeLayout from './layout/ProtectedLayout';
import Protected_generateLayout from './layout/ProtectedLayout';
import Generate from './components/generate/Generate';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home/>}/>
        <Route path='/create' element={<Home/>}/>
        
        <Route path='/customize' element={
          <Protected_customizeLayout>
            <CustomizeLayout/>
          </Protected_customizeLayout>
        } />
        <Route path='/generate' element={
          <Protected_generateLayout>
            <Generate/>
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