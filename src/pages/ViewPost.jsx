import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ViewPost() {
  const direction = useNavigate();
  const [posts, setPosts] = useState([]); //empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/get-posts');

        if (response.data.posts) {
          setPosts(response.data.posts);
        }
      } catch (error) {
        setError(error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className='min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100'>

      {/* Header */}
      <div className='max-w-7xl mx-auto mb-8'>
        <h1 className='py-5 text-center sm:text-2xl text-lg font-semibold'>Your Feed (View Your Posts)</h1>
        <p className='text-center text-gray-500 text-sm'>These are the posts you have created. You can view them here.</p>
      </div>

      {/* Post grid */}
      <div className='max-w-7xl mx-auto'>
        {loading && (
          <div
            className='flex justify-center items-center h-64'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500'></div>
          </div>
        )}

        {error && (
          <div className='text-center text-red-500'>
            <p className='text-red-600'>Error:-{error}</p>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-500 mb-4'>No posts Yet</p>
            <button
              onClick={() => direction('/create-post')}
              className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
              Create Post
            </button>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {posts.map((post) => (
              <div
                key={post._id}
                className='border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow  p-4'>

                {/* image  */}
                <div className='w-full h-64 sm:h-72 lg:h-80 overflow-hidden'>
                  <img
                    src={post.image}
                    alt={post.caption}
                    className='rounded-xl w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                  />
                </div>

                {/* caption */}
                <div className='p-4'>
                  <p className='text-gray-700 text-sm sm:text-base line-clamp-3'>{post.caption}</p>
                  <p className='text-xs text-gray-400 mt-2'>
                    ID: {post._id.slice(0, 8)}......
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}


        {/* button */}
        <div className='flex justify-center mt-8 gap-10'>
          <button
            onClick={() => direction('/create-post')}
            className='px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 '
          >
            Create post
          </button>
          <button
            className='px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 '
            onClick={() => direction('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewPost
