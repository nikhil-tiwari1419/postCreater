import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Palette, Users, Heart, Sparkles, Target, Zap } from 'lucide-react'

function About() {
  const features = [
    {
      icon: <Palette size={40} />,
      title: "Creative Expression",
      description: "Share your artistic vision with a global community of creators and art enthusiasts."
    },
    {
      icon: <Users size={40} />,
      title: "Vibrant Community",
      description: "Connect with fellow artists, get inspired, and collaborate on amazing projects."
    },
    {
      icon: <Heart size={40} />,
      title: "Support Artists",
      description: "Discover, appreciate, and support talented artists from around the world."
    },
    {
      icon: <Sparkles size={40} />,
      title: "Diverse Art Forms",
      description: "From digital art to traditional paintings, photography to illustrations - all forms welcome."
    }
  ]

  const stats = [
    { number: "10K+", label: "Artists" },
    { number: "50K+", label: "Artworks" },
    { number: "100K+", label: "Community Members" },
    { number: "150+", label: "Countries" }
  ]
// Founder &
  const team = [
    {
      name: "Nikhil Tiwari",
      role: "  Developer",
      description: "Passionate about bringing artists together through technology."
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <Navbar/>
      
      {/* Hero Section */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center'>
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
            About <span className='text-blue-500'>meily</span>
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Meily is a creative platform where artists from around the world come together to share, 
            discover, and celebrate art in all its forms. We believe everyone has a story to tell through their art.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className='bg-blue-500 text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <Target size={40} />
                <h2 className='text-4xl font-bold'>Our Mission</h2>
              </div>
              <p className='text-lg leading-relaxed opacity-90'>
                To create a welcoming space where artists of all levels can showcase their work, 
                connect with like-minded creatives, and inspire each other. We're building more than 
                a platform – we're building a global community united by creativity.
              </p>
            </div>
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <Zap size={40} />
                <h2 className='text-4xl font-bold'>Our Vision</h2>
              </div>
              <p className='text-lg leading-relaxed opacity-90'>
                To become the world's most beloved platform for artists, where creativity knows no 
                bounds and every artist finds their audience. We envision a future where art is 
                accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-4xl font-bold text-center text-gray-900 mb-16'>
            Our Impact
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-5xl font-bold text-blue-500 mb-2'>{stat.number}</div>
                <div className='text-gray-600 text-lg'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='bg-gray-50 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-4xl font-bold text-center text-gray-900 mb-4'>
            What Makes Us Special
          </h2>
          <p className='text-center text-gray-600 mb-16 max-w-2xl mx-auto'>
            Meily isn't just another social platform. We're designed specifically for artists, 
            by artists, with features that matter to creative communities.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
              >
                <div className='text-blue-500 mb-4'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-4xl font-bold text-center text-gray-900 mb-4'>
            Meet The Team
          </h2>
          <p className='text-center text-gray-600 mb-16 max-w-2xl mx-auto'>
            The passionate individuals working to make Artify the best platform for artists worldwide.
          </p>
          <div className='flex justify-center'>
            {team.map((member, index) => (
              <div 
                key={index} 
                className='bg-white p-8 rounded-xl shadow-lg max-w-md text-center'
              >
                <div className='w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold'>
                  {member.name.charAt(0)}
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                  {member.name}
                </h3>
                <p className='text-blue-500 font-semibold mb-4'>
                  {member.role}
                </p>
                <p className='text-gray-600 leading-relaxed'>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>
            Ready to Share Your Art?
          </h2>
          <p className='text-xl mb-8 opacity-90'>
            Join thousands of artists who are already part of the Artify community.
          </p>
          <div className='flex gap-4 justify-center flex-wrap'>
            <a 
              href="/create-post" 
              className='bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors'
            >
              Start Creating
            </a>
            <a 
              href="/View-Feed" 
              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-500 transition-colors'
            >
              Explore Art
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About