import React from 'react'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className='bg-gray-300  mt-auto'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        
        {/* Footer Content Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          
          {/* Company Info */}
          <div>
            <h3 className='text-gray-800 text-lg font-bold mb-4'>Artify</h3>
            <p className='text-sm text-gray-600 mb-4'>
              Discover and share amazing art from creators around the world.
            </p>
            <div className='flex gap-4'>
              {/* Social Icons */}
              <a href="#" className='hover:text-blue-800 transition-colors'>
               <Facebook size={25} strokeWidth={3.05} />
              </a>
              <a href="#" className='hover:text-blue-500 transition-colors'>
               <Twitter size={25} strokeWidth={2.25} />
              </a>
              <a href="#" className='hover:text-red-500 transition-colors'>
                <Instagram strokeWidth={2.25} />
              </a>
              <a href="#" className='hover:text-blue-500 transition-colors'>
                <Linkedin size={25} strokeWidth={2.25} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-gray-800 text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li><a href="/" className='cursor-not-allowed hover:text-gray-900 transition-colors'>Home</a></li>
              <li><a href="/explore" className='cursor-not-allowed hover:text-gray-900 transition-colors'>Explore</a></li>
              <li><a href="/create-post" className='cursor-not-allowed hover:text-gray-900 transition-colors'>Create Post</a></li>
              <li><a href="/about" className='cursor-not-allowed hover:text-gray-900 transition-colors'>About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='text-gray-800 text-lg font-semibold mb-4'>Support</h3>
            <ul className='space-y-2 text-sm'>
              <li><a href="#" className='cursor-not-allowed hover:text-gray-900 transition-colors'>Help Center</a></li>
              <li><a href="#" className='cursor-not-allowed hover:text-gray-900 transition-colors'>Contact Us</a></li>
              <li><a href="#" className='cursor-not-allowed hover:text-gray-900 transition-colors'>Privacy Policy</a></li>
              <li><a href="#" className='cursor-not-allowed hover:text-gray-900 transition-colors'>Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='text-gray-800 text-lg font-semibold mb-4'>Stay Updated</h3>
            <p className='text-sm text-gray-600 mb-4'>Subscribe to our newsletter</p>
            <div className='flex gap-2'>
              <input 
                type="email" 
                placeholder="Your email"
                className='flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button className='cursor-not-allowed px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium'>
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500'>
          <p>&copy; 2026 Artify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

