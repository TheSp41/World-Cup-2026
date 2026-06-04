import React from 'react'
import githubLogo from '../assets/GithubLogo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-auto">
      <div className="container mx-auto flex justify-center items-center">
        <a 
          href="https://github.com/TheSp41" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
        >
          <img src={githubLogo} alt="GitHub Logo" className="w-6 h-6 object-contain" />
          <span className="text-sm font-medium">TheSp41</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
