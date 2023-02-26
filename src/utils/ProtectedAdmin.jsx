import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthHandle from './AuthHandel'

function ProtectedAdmin(props) {
  const navigate = useNavigate();
  const {Component1} = props
  const {Component2} = props
  useEffect(()=>{
    if(!AuthHandle.loggedIn()){
      navigate('/')
    }
  })
  return (
    <>
        <Component1/>
        <Component2/>
    </>
  )
}
export default ProtectedAdmin
