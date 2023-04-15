import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import Formfill from '../Pages/Formfill'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const PrivateRoute = ({ isAuthenticated, children = "nothing" }) => {
  return isAuthenticated ? children : <Navigate to="/login" />
}


function Allroutes() {

  const { isAuthenticated } = useSelector((state) => state.login);

  return (
    <>
    <Routes>
    <Route path='/' element={<SignUp/>} />
    <Route path='/login' element={<Login/>} />
    <Route path="/fill" element={
      <PrivateRoute isAuthenticated={isAuthenticated}><Formfill/></PrivateRoute>} />
    </Routes>
    </>
  )
}

export default Allroutes