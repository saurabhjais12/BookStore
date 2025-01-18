import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const FreeBook = () => {
    const[book, setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
               const res =await axios.get("http://localhost:4001/book");
               console.log(res.data)
               setBook(res.data.filter((data) => data.category === "free"))
            } catch (error) {
                console.log(error);
                
            }
        }
        getBook();

    },[])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // console.log(data);

    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <div className='px-8 pt-5'>
                    <h1 className="font-semibold text-xl pb-2"> <span className='text-green-500'>B</span>EST 
                    <span className='text-green-500'> F</span>REE <span className='text-green-500'>B</span>OOKS
                    </h1>
                    </div>


                    <p className='px-8'>
                    Books are one of the most powerful tools for learning, discovery, and entertainment, and the best part is,
                     many of them are available for free. Whether through public libraries, online platforms, or open-source
                    initiatives,free books make knowledge accessible to everyone, regardless of location or 
                    financial status.
                    </p>
                </div>

                <div>
                    <Slider {...settings}>
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBook