import React from 'react'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import ViewPost from './pages/ViewPost'
import About from './components/About'
import { Toaster } from 'react-hot-toast'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    // <BrowserRouter>
    <Router>
      <Toaster
        position='top-center'
        reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/View-Feed' element={<ViewPost />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </Router>
    // </BrowserRouter>
  )
}

export default App


