import React, { useState, useContext, useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserIcon } from '../assets/UserLogo'
import AuthContext from '../context/AuthContext'
import { logoutUser } from '../utils/Util'
const Navbar = () => {
  const { accessToken, setAccessToken, username, setUsername } = useContext(AuthContext)
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const navLinks = [
    { name: 'Hub', path: '/' },
    { name: 'Standings', path: '/Standings' },
    { name: 'Leagues', path: '/Leagues' },
    { name: 'My XI', path: '/MyXI' },
    { name: 'Predict', path: '/MatchPrediction' },
  ]
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = async () => {
    try {
      await logoutUser()

      setAccessToken(null)
      setUsername("")
      setIsDropdownOpen(false)
      navigate('/login')
    } catch (error) {
      console.error('Failed to log out', error)
    }
  }

  return (
    <nav className="sticky top-0 z-50 hidden sm:flex justify-between items-center px-8 py-4 shadow-md bg-gray-900 border-b border-gray-800">
      <Link to="/" className="flex items-center gap-2 cursor-pointer">
        <img src="/logo.svg" alt="FutPulse logo" className="h-10 w-auto" />
        <div className="text-2xl font-bold text-white">FutPulse</div>
      </Link>

      <ul className="flex items-center gap-6 list-none m-0 p-0 font-medium text-gray-300">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path} className="block hover:text-blue-400 transition-all duration-300 hover:-translate-y-1">
              {({ isActive }) => (
                <>
                  <p className={isActive ? "text-blue-400" : ""}>{link.name}</p>
                  <hr className={`w-full h-0.5 bg-blue-400 border-none transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}/>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="relative" ref={dropdownRef}>
        {accessToken ? (
          <>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="User Profile" 
              className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-green-400 hover:bg-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <UserIcon className="w-5 h-5" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-gray-800 rounded-lg shadow-xl py-2 border border-gray-700">
                <div className="px-4 py-2 border-b border-gray-700 mb-1">
                  <p className="text-xs text-gray-400">Signed in as</p>
                 
                  <p className="text-sm font-semibold text-white truncate">{username}</p>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            )}
          </>
        ) : (
          <Link 
            to="/login" 
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg shadow-lg transition-all duration-200 active:scale-95"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar