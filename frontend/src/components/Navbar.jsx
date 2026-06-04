import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { UserIcon,StandingsIcon,FixturesIcon,LeagueIcon,MyXIIcon } from '../assets/UserLogo'
const Navbar = () => {
  const navLinks = [
    { name: 'Hub', path: '/' },
    { name: 'Standings', path: '/Standings' },
    { name: 'Leagues', path: '/Leagues' },
    { name: 'My XI', path: '/MyXI' },
    { name: 'Fixtures', path: '/Fixtures' },
  ];

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
    <button aria-label="User Profile" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-green-400 hover:bg-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-green-400">
      <UserIcon className="w-5 h-5" />
    </button>
    </nav>
  )
}

export default Navbar
