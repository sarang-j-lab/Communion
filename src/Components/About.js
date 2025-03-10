import React from 'react'

const About = () => {
  return (
    <div className='w-full flex justify-center mt-6 '>
        <div className='w-full xl:w-1/2 sm:w-full bg-white/20 backdrop-blur-xl flex flex-col  items-center p-4 rounded-lg'>
            <h1 className='text-[3vw] font-bold m-3'>About Communion</h1>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-white font-bold text-[2vw]'>What is Communion?</h3>
                <p className='font-bold p-3'>Communion Hub is a platform designed to bring people together through meaningful events. Whether it's a religious gathering, a social meetup, or a charity event, our goal is to help communities connect, engage, and grow.</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-white font-bold text-[2vw]'> Our Mission & Vision!</h3>
                <p className='font-bold p-3'>To create a seamless platform where individuals and communities can discover, organize, and participate in events that matter to them.</p>
            </div>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-full 
                    transform transition-all duration-300 hover:scale-110 active:scale-95"
                        target='_Blank'
                        href='https://communionhub.org/' rel="noreferrer">
                        Join Now
                    </a>
        </div>
    </div>
  )
}

export default About