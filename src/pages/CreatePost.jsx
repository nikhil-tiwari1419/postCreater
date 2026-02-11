import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function CreatePost() {
  const path = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [fileName, setFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);  // ← NEW: Store file in state
  const [captionLength, setCaptionLength] = useState(0);
  const [loading, setLoading] = useState(false);

  const maxLength = 500;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);  // ← Store file in state

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCaptionChange = (e) => {
    setCaptionLength(e.target.value.length);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Check if file is selected
    if (!selectedFile) {
      toast((t) => (
        <span>
          Please select an <b>image</b>
          <button onClick={() => toast.dismiss(t.id)}>
            Ok
          </button>
        </span>
      ));
      setLoading(false);
      return;
    }

    // Create FormData manually
    const formData = new FormData();
    formData.append('image', selectedFile);  // ← Use file from state
    formData.append('caption', document.getElementById('caption').value);

    // Debug
    // console.log('Sending file:', selectedFile);
    // console.log('File name:', selectedFile.name);
    // console.log('File size:', selectedFile.size);
    // console.log('File type:', selectedFile.type);

    try {
      const response = await axios.post(
        `${import.meta.env.BACKEND_URL}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      // console.log('Response:', response.data);

      if (response.data.success || response.status === 201) {
        toast.success((t) => (
          <span>
            Post created successfully!
            <button onClick={() => toast.dismiss(t.id)}>🙌</button>
          </span>
        ));
        // Reset form
        setImagePreview(null);
        setFileName('');
        setSelectedFile(null);
        setCaptionLength(0);

        path('/View-Feed');
      }
    } catch (err) {
      console.error('Error:', err);
      const errorMessage = err.response?.data?.message || 'Error creating post. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const clearImage = () => {
    setImagePreview(null);
    setFileName('');
    setSelectedFile(null);  // ← Clear file from state
    document.getElementById('file-upload').value = '';
  };

  return (
    <section className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8'>
      <div className='w-full max-w-2xl'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2'>
            Create Post
          </h1>
          <p className='text-gray-600 text-sm sm:text-base'>
            Share your moment with the world
          </p>
        </div>

        <div className='bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10'>
          <button
            onClick={() => path('/')}
            className='px-4 py-2 mb-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors'
          >
            Back to Home
          </button>

          <form
            onSubmit={handelSubmit}
            className='flex flex-col gap-6'
          >
            {/* Image Upload */}
            <div className='space-y-2'>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Upload Image
              </label>

              {imagePreview ? (
                <div className='relative'>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className='w-full h-64 sm:h-80 object-cover rounded-xl'
                  />
                  <button
                    type='button'
                    onClick={clearImage}
                    className='absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors'
                  >
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                  <p className='mt-2 text-sm text-gray-600'>
                    📁 {fileName}
                  </p>
                </div>
              ) : (
                <div className='relative'>
                  <input
                    type="file"
                    name='image'
                    accept='image/*'
                    onChange={handleImageChange}
                    className='hidden'
                    id='file-upload'
                    required
                  />
                  <label
                    htmlFor='file-upload'
                    className='flex justify-center w-full h-64 sm:h-80 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors'
                  >
                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                      <svg className='w-12 h-12 sm:w-16 sm:h-16 mb-4 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' />
                      </svg>
                      <p className='mb-2 text-sm sm:text-base text-gray-600 font-medium'>
                        Click to upload or drag and drop
                      </p>
                      <p className='text-xs sm:text-sm text-gray-500'>
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </label>
                </div>
              )}
            </div>

            {/* Caption */}
            <div className='space-y-2'>
              <label htmlFor='caption' className='block text-sm font-semibold text-gray-700'>
                Caption
              </label>
              <textarea
                name='caption'
                id='caption'
                required
                rows='4'
                maxLength={maxLength}
                placeholder='Write a caption for your post...'
                onChange={handleCaptionChange}
                className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 placeholder-gray-400'
              />
              <div className='flex justify-between items-center'>
                <p className={`text-xs ${captionLength > maxLength * 0.9 ? 'text-red-500' : 'text-gray-500'}`}>
                  {captionLength}/{maxLength} characters
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 pt-4'>
              <button
                type='button'
                onClick={() => path('/')}
                disabled={loading}
                className='w-full sm:w-auto px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Cancel
              </button>
              <button
                type='submit'
                disabled={loading}
                className='w-full sm:flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
              >
                {loading ? (
                  <span className='flex items-center justify-center gap-2'>
                    <svg className='animate-spin h-5 w-5' viewBox='0 0 24 24'>
                      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' />
                      <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                    </svg>
                    Uploading...
                  </span>
                ) : (
                  'Publish Post'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CreatePost