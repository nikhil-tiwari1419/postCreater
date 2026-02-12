import React from 'react'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Footer() {

  const path = useNavigate();
  const Socila_media = [
    {
      name: "Facebook",
      lable: <Facebook size={25} strokeWidth={3.05} />,
      link: "https://linkedin.com/in/nikhil-tiwari-53743b339"
    },
    {
      name: "Instagram",
      lable: <Instagram strokeWidth={2.25} />,
      link: "https://linkedin.com/in/nikhil-tiwari-53743b339"
    },
    {
      name: "Twitter",
      lable: <Twitter size={25} strokeWidth={2.25} />,
      link: "https://linkedin.com/in/nikhil-tiwari-53743b339"
    },
    {
      name: "Linkedin",
      lable: <Linkedin size={25} strokeWidth={2.25} />,
      link: "https://linkedin.com/in/nikhil-tiwari-53743b339"
    },

  ]

  const InternalLink = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "Create-post",
      url: "/create-post"
    },
    {
      name: "Feed",
      url: "/View-Feed"
    },
    {
      name: "About",
      url: "/About"
    },
  ]

  const SupportLinks = [
    {
      name: "Help Center",
      url: "/"
    },
    {
      name: "Contact Us",
      url: "/About"
    },
    {
      name: "Privacy policy",
      url: ""
    },
    {
      name: "Terms of service",
      url: ""
    },
  ]
  return (
    <footer className='bg-gray-300  mt-auto'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

        {/* Footer Content Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

          {/* Company Info */}
          <div>
            <button className='text-gray-800 p-2 text-lg font-bold mb-4 border rounded'
              onClick={() => path('/')}
            >Meily.Com
            </button>
            <p className='text-sm text-gray-600 mb-4'>
              Discover and share amazing art from creators around the world.
            </p>
            <div className='flex gap-4'>
              {/* Social Icons */}
              <ul
                className='sm:flex gap-5 '
              >
                {Socila_media.map((item, idx) => (
                  <li
                    key={idx}
                  >
                    <a href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-700 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110'>
                      {item.lable}{item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-gray-800 text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              {InternalLink.map((item, idx) => (
                <li
                  key={idx}
                  className='font-semibold underline underline-offset-2'
                >
                  <a href={item.url}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='text-gray-800 text-lg font-semibold mb-4'>Support</h3>
            <ul className='space-y-2 text-sm '>
              {SupportLinks.map((ite, idx) => (
                <li 
                key={idx}>
                  <a 
                  className='cursor-not-allowed'
                  href={ite.url}>
                    {ite.name}
                  </a>
                </li>
              ))}
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
          <p>&copy; {new Date().getFullYear()} <span className='font-mono font-bold'>Meily</span> . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

