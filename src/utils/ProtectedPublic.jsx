import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthHandle from './AuthHandel'

function ProtectedPublic(props) {
  const navigate = useNavigate();
  const {Component1} = props
  useEffect(()=>{
    if(AuthHandle.loggedIn()){
      navigate('/admin/dashboard')
    }
  })
  return (
    <>
        <Component1/>
    </>
  )
}
export default ProtectedPublic
