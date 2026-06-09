import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AuthContext from '../context/AuthContext'

const PublicRoute = ({ children }) => {
  const { accessToken } = useContext(AuthContext)

  useEffect(() => {
    if (accessToken) {
      toast.info('You are already logged in!')
    }
  }, [accessToken])

  if (accessToken) {
    return <Navigate to="/" replace />
  }

  return children
}

export default PublicRoute