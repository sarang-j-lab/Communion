import React from 'react'
import { IoGitNetworkOutline } from "react-icons/io5";
import { MdOutlineEventNote } from "react-icons/md";
import { GiGrowth } from "react-icons/gi";
import { GrResources } from "react-icons/gr";



const EndGame = () => {

    const cards = [
        { title: "Networking", icon: <IoGitNetworkOutline size={"70px"} color='black' />,description:"Connect with like-minded people." },
        { title: "Insightfull Events", icon: <MdOutlineEventNote size={"70px"} color='black' />,description:"Participate in workshops, talks, and discussions." },
        { title: "Communtiy Growth", icon: <GiGrowth size={"70px"} color='black' />,description:"Learn, collaborate, and share knowledge." },
        { title: "Resource Hub", icon: <GrResources size={"70px"} color='black' />,description: "Access valuable tools, guides, and insights."},
    ]

    return (
        <div className='mx-10 mt-6 py-4 px-2 h-[33vh] gap-4 bg-white/20 backdrop-blur-xl rounded-lg  hidden md:block  sm:block 
              animate-fade-in-up hover:shadow-xl transition-shadow duration-300'>
            <h1 className='text-3xl text-white font-bold animate-fade-in-right delay-150'>
                Why Join?
            </h1>
            <section className='flex flex-row w-full h-full gap-10 font-bold'>
                {cards.map((card, index) => (
                    <div key={index}
                        className=' w-1/4 gap-4 rounded-lg flex items-center justify-center
                     animate-fade-in-left hover:scale-105 transition-all duration-300 
                      cursor-pointer'
                        style={{ animationDelay: `${index * 200}ms` }}>
                        <span className='text-white text-lg group-hover:text-blue-300 transition-colors flex flex-col'>
                            {card.title}
                            <span className='text-sm'>{card.description}</span>
                        </span>
                        <span className='text-2xl transform transition-all duration-300 hover:scale-125'>
                            {card.icon}
                        </span>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default EndGame