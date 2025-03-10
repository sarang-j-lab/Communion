import { Link } from 'react-router'

const Header = () => {

    const navigateButtons = [{ title: "Home", path: "/" }, { title: "Events", path: "/events" }, { title: "About", path: "/about" }];

    return (
        <div className='w-full flex flex-col justify-center items-center sm:flex-row  font-bold'>
            <section className='xs:w-1/4 p-6 text-[4vh] text-white animate-fade-in-left sm:w-full'>
                <span className='bg-black hover:scale-105 transition-transform duration-300 inline-block'>
                    COMMUNION
                </span>HUB
            </section>

            <section className='xs:w-2/4 sm:w-full p-4 text-[4vw] text-white mx-auto flex flex-col justify-center items-center animate-fade-in-right delay-300 '>
                <span className='text-[2vh] hover:scale-105 transition-transform duration-300 bg-black px-2 py-1'>Building Stronger Connections</span>
                <span className='text-[4vh] hover:scale-105 transition-transform duration-300'>One Event at a Time</span>
            </section>

            <section className='xs:w-1/4 w-full  animate-fade-in-left '>
                <div className=' bg-white rounded-3xl p-2 shadow-md hover:shadow-lg transition-shadow duration-300 flex'>
                    {navigateButtons.map((item,i) => (
                        <Link to={item.path} key={i} className='w-1/3 flex justify-center   hover:scale-110  transition-transform duration-300 active:scale-95  '>
                            {item.title}
                        </Link>
                    ))}

                </div>
            </section>
        </div>
    )
}

export default Header