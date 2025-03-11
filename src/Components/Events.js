import {useState} from 'react'
import EventCard from './EventCard'

const Events = () => {

    const [events,setEvent] = useState(JSON.parse(localStorage.getItem("events")))
    const copyEvent = JSON.parse(localStorage.getItem("events"));

    console.log(copyEvent)

    const handleCategoryFilter = (category)=>{
        console.log(category)
        if(category === "All"){
            setEvent(copyEvent);
        }else{
            const filteredEvents = copyEvent.filter((e)=> e.category === category)
            setEvent(filteredEvents)
        }
    }


    return (
        <div>
            <div className='w-full flex items-center flex-col font-bold mt-5 gap-3'>
                <h1 className='xl:text-[5vh] sm:text-[3vh] text-white'>We Helped Communities Connect & Flourish</h1>
                <h4 className='text-[4vh] sm:text-[4vh] text-white'>✦ Upcoming Events</h4>
                <div>
                    <div class="inline-flex rounded-md shadow-xs" role="group">
                        <button onClick={()=>handleCategoryFilter("All")}  type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            All
                        </button>
                        <button onClick={()=>handleCategoryFilter("Social")} type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Social
                        </button>
                        <button onClick={()=>handleCategoryFilter("Religious")} type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                             Religious
                        </button>
                        <button onClick={()=>handleCategoryFilter("Charity")} type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Charity
                        </button>
                    </div>
                </div>
            </div>
            <div className='h-1/3 grid xl:grid-cols-3 md:grid-col-2 sm:grid-col-1 gap-3 mt-5 '>
                {events.map((event,i)=>(
                    <EventCard key={i} event={event}/>
                ))}
            </div>
        </div>
    )
}

export default Events