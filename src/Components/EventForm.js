import React, { useState } from 'react'
import { SiOutline } from 'react-icons/si';
import { useSearchParams } from 'react-router';

const EventForm = () => {

    const [event,setEvent] = useState({
        title: "",
        date: "",
        category: ""
    })

    const handleChange = (eve)=>{
        const {id, value} = eve.target;
        setEvent({...event, [id]: value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const events = JSON.parse(localStorage.getItem("events"))
        localStorage.setItem("events", JSON.stringify([...events,event]));
        setEvent({
            title: "",
            date: "",
            category: ""
        });
    }
    return (
        <div className='flex flex-col items-center justify-center mt-5'>
            <h1 className='self-center text-white font-bold text-[3vw] '>Add Event</h1>
            <div className='bg-white/20 backdrop-blur-xl w-[50vw] rounded-lg'>


                <form onSubmit={handleSubmit}  class="max-w-sm  mx-auto px-3 my-5">
                    <div class="mb-5">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input onChange={handleChange} type="text" id="title" value={event.title} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Christmas Charity Drive" required />
                    </div>
                    <div class="mb-5">
                        <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Event</label>
                        <input onChange={handleChange} type="date" id="date" value={event.date} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-5">
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select id='category' onChange={handleChange} value={event.category} className="bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value={"Religious"}>Religious</option>
                            <option value={"Social"}>Social</option>
                            <option value={"Charity"}>Charity</option>
                        </select>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Event</button>
                </form>

            </div>
        </div>
    )
}

export default EventForm;