import React from 'react'
import { useLocation } from 'react-router-dom'
import LoginForm from '../components/FormLogin'
import RegisterForm from '../components/FormRegister'
import { AuthProvider } from "../context/AuthContext";
const LoginRegister = () => {
  const location = useLocation()
  return (
      <>
          <AuthProvider>
          {
          location.pathname == '/login' ?
              <LoginForm />
              :
              <RegisterForm/>
              }
              </AuthProvider>
      </>
  )
}

export default LoginRegister