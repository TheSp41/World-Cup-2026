import { useContext } from "react"
export const loginUser = async (email, password) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/api/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.msg || 'Invalid email or password.')
  }

  return data
}

export const registerUser = async (name, email, password) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username:name, email, password })
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.msg || 'Registration failed. Please try again.')
  }

  return data
}

export const logoutUser = async () => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/api/auth/logout`, {
    method: 'POST',
    credentials: 'include'
  })

  if (!response.ok) {
    throw new Error('Failed to log out from server')
  }

  return await response.json()
}