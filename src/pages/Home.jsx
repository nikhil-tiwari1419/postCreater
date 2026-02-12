import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
    const path = useNavigate();

    const Poster = [
        {
            id: 1,
            title: "Woodland",
            image: "https://plus.unsplash.com/premium_vector-1697729804286-7dd6c1a04597?q=80&w=1070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
        {
            id: 2,
            title: "Draw Sunset",
            image: "https://images.unsplash.com/vector-1741924242779-3c1d6b5912c9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
        {
            id: 3,
            title: "LakeSide",
            image: "https://plus.unsplash.com/premium_vector-1697729780111-058eea198643?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
        {
            id: 4,
            title: "Beach View",
            image: "https://plus.unsplash.com/premium_vector-1702386499779-d217708afa9f?q=80&w=1123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
        {
            id: 5,
            title: "Digital Art",
            image: "https://plus.unsplash.com/premium_vector-1715786847762-e4f0299602bf?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
        {
            id: 6,
            title: "Flower Illustration",
            image: "https://plus.unsplash.com/premium_vector-1731316416575-eb054d6402b3?q=80&w=851&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
    ]
    return (
        <>
            <Navbar />
            {/* Landing page */}
            <div className='min-h-screen flex flex-col p-4 items-center justify-start gap-6 bg-gradient-to-br from-gray-50 to-gray-100'>
                {/* for postrers  */}
                <div className='border-3 overflow-auto border-dashed border-gray-300 rounded-xl w-full max-w-7xl p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center gap-6'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2'>
                        Welcome to <span className='font-mono font-bold underline underline-offset-2'>Meily</span>
                    </h1>
                    <p className='text-gray-600 text-sm sm:text-base text-center'>
                        Discover and share amazing art
                        these are some of the good art pieces . Explore, create, and get inspired!
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl p-4'>
                        {Poster.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-2 rounded-lg shadow-xl hover:shadow-xl transition-shadow cursor-pointer">
                                <p className='rounded-full font-bold bg-blue-200  text-center top-2 right-2 mx-32 sm:p-1 sm:m-2 p-1 m-2'>{item.id}</p>
                                <img src={item.image} className="w-full h-48 object-cover rounded-lg shadow-xl" />
                                <h1 className="text-center text-gray-700 font-medium">{item.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <span className='flex gap-20'>
                    <button
                        onClick={() => path('/create-post')}
                        className='px-6 py-3 bg-gradient-to-r cursor-pointer from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.01] active:scale-[0.98]'
                    > Create Post
                    </button>
                    <button
                        onClick={() => path('/View-Feed')}
                        className='px-6 py-3 bg-gradient-to-r cursor-pointer from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.01] active:scale-[0.98]'
                    > Feed
                    </button>
                </span>
            </div>
            <Footer />
        </>
    )
}

export default Home


{/* we can use both method for returning the image-address 
1) use return method or use parenthesies after arrrow function  */}

{/* {Poster.map((item, idx) => {
            return (

                <div
                    key={idx} className="w-full max-w-xs h-48 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
            )
        })} */}