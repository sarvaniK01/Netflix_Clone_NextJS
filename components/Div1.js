import styles from  '../styles/Home.module.css'
import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; 
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Div1() {
    return(
        <div className='h-[40rem] font-nunito'>
            <section className="bg-hero bg-center bg-no-repeat bg-cover h-full p-[1.2rem]">
                {/* HEADER */}
                <div className='flex justify-between'>
                    <img src='/netflix_logo.png' alt='netflix-logo' className="w-[6.5rem] md:w-[10.5rem] md:pl-3"/>

                    <div className='flex  md:gap-x-5'>
                        <button className='flex text-white gap-x-2 my-auto mx-2 border border-white/40 px-2  py-2 md:py-1 rounded-md'>
                            <FontAwesomeIcon icon={faGlobe} className='my-auto'></FontAwesomeIcon>
                            <p className='text-md px-1 font-semibold hidden md:block my-auto'>English</p>
                            <FontAwesomeIcon icon={faCaretDown} className='my-auto'></FontAwesomeIcon>
                        </button>

                        <button className='text-white my-auto mx-auto bg-[#E50914] rounded-md px-4 py-1.5 mr-2 hover:bg-[#E50914]/80 hover:linear hover:duration-200'>
                            <p className='my-auto py-auto text-sm font-bold'>Sign In</p>
                        </button>
                    </div>
                </div>

                {/* CONTENT */}
                <div className='mt-[23%] 2xl:mt-[10%]'>
                    <p className='font-black text-white text-3xl lg:text-5xl text-center'>Unlimited movies, TV shows and more.</p>
                    <p className='text-white text-center mt-5 font-semibold text-lg lg:text-2xl'>Watch anywhere. Cancel anytime.</p>
                    <p className='text-white text-center mt-5 mx-3 text-lg lg:text-xl'>Ready to watch? Enter your email to create or restart your membership.</p>

                    <div className='flex flex-col md:flex-row gap-x-2 mx-auto justify-center mt-7 md:mt-0'>
                        <div className='mt-auto w-[70%] md:w-[50%] lg:w-[36%] mx-auto md:mx-0'>
                            <input type='text' placeholder='Email address' className=' py-4 pl-4 rounded-sm text-white font-semibold bg-black/40 w-[100%] border border-white/40'/>
                        </div>
                        <button className='flex text-white mx-auto md:mx-0 bg-[#E50914] rounded-sm mt-4 px-5 py-3 md:py-3.5 lg:py-3 hover:bg-[#E50914]/80 hover:linear hover:duration-200'>
                            <p className='text-md md:text-xl lg:text-2xl font-bold'>Get Started</p>
                            <FontAwesomeIcon icon={faChevronRight} className='my-auto px-1 text-sm font-light'/>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}



