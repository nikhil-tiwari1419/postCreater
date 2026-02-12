import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className='bg-gray-200 w-full shadow-md  sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>

          {/* Logo */}
          <div className='flex border-3 rounded-4xl items-center cursor-pointer' onClick={() => navigate('/')}>
            <img
              src="/image.png"
              alt="Artify Logo"
              className="h-10 w-auto object-contain"
            />
            {/* <span className='ml-2  text-xl font-bold text-gray-900'></span> */}
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-6'>
            <a href="/" className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>
              Home
            </a>
            <a href="/View-Feed" className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>
              Feed
            </a>
            <a href="/create-post" className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>
              Create-Post
            </a>
            <a href="/About" className='text-gray-700 hover:text-blue-600 font-medium transition-colors'>
            About
            </a>
           
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100'
          >
            <svg
              className='w-6 h-6 text-gray-900'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden pb-4 space-y-3'>
            <a href="/" className='block text-gray-700 hover:text-blue-600 font-medium py-2'>
              Home
            </a>
            <a href="/View-Feed" className='block text-gray-700 hover:text-blue-600 font-medium py-2'>
              Feed
            </a>
            <a href="/create-post" className='block text-gray-700 hover:text-blue-600 font-medium py-2'>
              Create-Post
            </a>
            <a href="/About" className='block text-gray-700 hover:text-blue-600 font-medium py-2'>
              About
            </a>

          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

