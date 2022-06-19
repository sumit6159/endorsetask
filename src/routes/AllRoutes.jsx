import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from '../components/Form'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Form/>}/>
     
    </Routes>
  )
}

export default AllRoutes