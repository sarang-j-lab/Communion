import React from 'react'

const EventCard = ({event}) => {
    console.log(event)

  return (
    <div className='flex flex-col justify-center items-center w-full h-28 bg-white/20 backdrop-blur-xl gap-5 rounded-xl'>
        <p className='text-4xl'>{event.title}</p>
        <div className=' flex flex-row gap-4 justify-center items-center'>
            <span className='text-xl'>{new Date(event.date).toDateString()}</span>
            <span className='text-xl'>{event.category}</span>
        </div>
    </div>
  )
}

export default EventCard