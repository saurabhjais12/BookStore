import React from 'react'
import imagag2 from "../../public/imagag2.webp"
const Banner = () => {
    return (
        <>
            <div className='flex   flex-col md:flex-row  max-w-screen-2x1 container mx-auto md:px-20 px-4'>
                <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
                    <div className='space-y-12  ' >
                        <h1 className='text-4xl font-bold'>
                            <span className='text-blue-600'>W</span>elcome to the Bookstore , "Uncover the Magic in Every Page,
                            Step Into a World of Books".

                        </h1>
                        <p>Books are treasures that open doors to infinite possibilities.
                             They let us explore new worlds,
                            experience diverse cultures, and understand different perspectives. 
                            Each page is a journey, filled with wisdom, adventure, and emotion. In books,
                            we find stories that inspire, teach, and stay with us forever.!
                        </p>

                        <div className="flex flex-col items-start space-y-2 max-w-md mx-auto ">
                            <label htmlFor="email" className="text-gray-700 font-medium">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className='pt-4'>
                                <button className="px-4 py-2  bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 py-20 order-1'>
                    <img src={imagag2} alt="" className='w-full h-60% pl-8 pt-12' />
                </div>


            </div>
        </>
    )
}

export default Banner