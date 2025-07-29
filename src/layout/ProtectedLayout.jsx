import React from 'react'
import { Navigate, useOutletContext } from 'react-router'

function Protected_customizeLayout({children}) {
    const {searchTerm, Topic} = useOutletContext();
    
    if (searchTerm.length < 4 === true || Topic === true){
        return <Navigate to='/' replace/>
    }
    return children;
}

export default Protected_customizeLayout