import React, { useState } from 'react'
import HomePage from './components/HomePage'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import RootLayout from './layout/RootLayout';
import CustomizeLayout from './components/customize/CustomizeLayout';
import Protected_customizeLayout from './layout/ProtectedLayout';

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
        

      </Route>
    )
  )
  return (
      <RouterProvider router={router}/>
  )
}

export default App;