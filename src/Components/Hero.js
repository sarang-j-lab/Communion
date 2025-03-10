import React from 'react'
import { Link } from 'react-router'
import EndGame from './EndGame'

const Hero = () => {
    return (
        <>
            <div className='grid grid-cols-1  mt-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1    '>
                <div className='bg-white/20 backdrop-blur-xl  mx-[2vw] my-[2vh] font-bold  h-[30vh] rounded-3xl flex items-center flex-col 
                    animate-fade-in-up hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl'>
                    <h1 className='text-white text-[3vh] m-4 animate-fade-in-down delay-150'>COMMUNION HUB</h1>
                    <p className='mx-8 text-[2vh] xl:text-[3vh]  animate-fade-in-up delay-300'>
                        Communion Hub is a platform designed to bring individuals together through enriching events...
                    </p>
                    <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-full 
                    transform transition-all duration-300 hover:scale-110 active:scale-95"
                        target='_Blank'
                        href='https://communionhub.org/' rel="noreferrer">
                        Join Now
                    </a>
                </div>

                <div className='bg-white/20 backdrop-blur-xl mx-[2vw] my-[2vh]  font-bold  h-[30vh] rounded-3xl flex items-center flex-col
                     animate-fade-in-up delay-200 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl'>
                    <h1 className='text-white text-[3vh] m-4 animate-fade-in-down delay-350'>Events</h1>
                    <p className='mx-8 text-[2vh] xl:text-[3vh] animate-fade-in-up delay-500'>
                        Join us to be part of a community where spirituality meets innovation...
                    </p>
                    <Link to={"/add-event"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-full
                        transform transition-all duration-300 hover:scale-110 active:scale-95">
                        Add Event
                    </Link>
                </div>
            </div>
            <EndGame/>
        </>
    )
}

export default Hero