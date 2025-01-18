import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"


const Cource = () => {
    const[book, setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
               const res =await axios.get("http://localhost:4001/book");
               console.log(res.data)
               setBook(res.data)
            } catch (error) {
                console.log(error);
                
            }
        }
        getBook();

    },[])
    return (
        <>
            <div>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl  md:text-4xl'>
                        We are delighted to have you <span className='text-pink-500'>here!</span>
                    </h1>
                    <p className='mt-8 px-12'>Free books are an incredible resource, making knowledge and
                         stories more accessible to everyone. Whether for self-improvement, leisure
                         reading, or academic research,
                         free books help foster a love of reading without any financial barriers.!
                    </p>

                    <Link to="/">
                        <button className='text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-150'>Back</button>
                    </Link>

                </div>
                <div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                        {book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cource