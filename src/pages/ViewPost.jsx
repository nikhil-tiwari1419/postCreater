import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function ViewPost() {
  const direction = useNavigate();
  const [posts, setPosts] = useState([]); //empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editCaption, setEditCaption] = useState('');

  // fetch post
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/get-posts`);

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

  //delete post 
  const handelDelete = async (postId) => {
    if (!window.confirm('Are you sure u want to delete this post ?!')) {
      return;
    }
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/delete-post/${postId}`)

      if (response.data.success) {
        setPosts(posts.filter(post => post._id !== postId));
        toast.success('post deleted succes fully 🎉 ');
      }
    } catch (error) {
      console.log('Error deleting post:', error);
      toast.error('Failed to delete poast');
    }
  };

  //start editing
  const startEdit = (post) => {
    setEditingId(post._id);
    setEditCaption(post.caption)
  };

  //cancle editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditCaption('');
  }

  // save edited caption
  const handleUpdate = async (postId) => {
    if (!editCaption.trim()) {
      toast.success('Caption cannot be empyt');
      return;
    }
    try {
      const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/update-post/${postId}`,
        { caption: editCaption }
      );
      if (response.data.success) {
        setPosts(posts.map(post =>
          post._id === postId ? response.data.post : post
        ));
        setEditingId(null);
        setEditCaption('');
        toast.success('post update succesfully!');
      }
    } catch (error) {
      console.error('Error updating post:', error);
      toast.error(error.response?.data?.message || 'Failed to update post');
    }
  };

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

        {/* No post */}
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

        {/* Post Grid */}
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

                {/* caption & Buttons */}
                <div className='p-4'>
                  {/* edit part  */}
                  {editingId === post._id ? (
                    <div className='space-y-3'>
                      <textarea
                        value={editCaption}
                        onChange={(e) => setEditCaption(e.target.value)}
                        className='w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transperant outline-none resize-none'
                        rows='3'
                        placeholder='Edit caption...'
                      />
                      <div
                        className='flex gap-2'>
                        <button
                          onClick={() => handleUpdate(post._id)}
                          className='flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors '>
                          Save
                        </button>
                        <button
                          onClick={() => cancelEdit}
                          className='flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors'>
                          Cancle
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className='text-gray-700 text-sm sm:text-base mb-3'>
                        {post.caption}
                      </p>
                      <p className='text-xs text-gray-400 mt-2'>
                        ID: {post._id.slice(0, 8)}......
                      </p>
                      {/* Action Buttons */}
                      <div className='flex gap-2'>
                        <button
                          onClick={() => startEdit(post)}
                          className='flex-1 px-4 py-2 bg-gray-300 text-black rounded hover:bg-blue-600 transition-colors flex items-center justify-center gap-2'
                        >
                          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
                          </svg>
                          Edit
                        </button>
                        <button
                          onClick={() => handelDelete(post._id)}
                          className='flex-1 px-4 py-2 bg-orange-200 text-black rounded hover:bg-red-600 transition-colors flex items-center justify-center gap-2'
                        >
                          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </>
                  )}
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
