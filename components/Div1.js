import styles from  '../styles/Home.module.css'
import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; 
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Div1() {
    return(
        <div>
            <section className={styles.div1}>
                {/* HEADER */}
                <div className='flex justify-between'>
                    <img src='/netflix_logo.png' alt='netflix_logo' className={styles.mainLogo}/>

                    <div className='flex'>
                        <button className='flex text-white my-auto mx-2 border-white border-[1px] border-opacity-70 px-1 py-1 rounded-sm'>
                            <FontAwesomeIcon icon={faGlobe} className='my-auto'></FontAwesomeIcon>
                            <p className='text-sm px-1'>English</p>
                            <FontAwesomeIcon icon={faCaretDown} className='my-auto'></FontAwesomeIcon>
                        </button>

                        <button className='text-white my-auto mx-auto bg-[#E50914] rounded-sm px-1.5 py-1.5 mr-2'>
                            <p className='my-auto py-auto text-sm font-semibold'>Sign In</p>
                        </button>
                    </div>
                </div>

                {/* CONTENT */}
                <div className='mt-12'>
                    <p className='font-bold text-white text-[1.7rem] text-center'>Unlimited movies, TV shows and more.</p>
                    <p className='text-white text-center my-3 text-[1.2rem]'>Watch anywhere. Cancel anytime.</p>
                    <p className='text-white text-center my-3 mx-3 text-[1.1rem]'>Ready to watch? Enter your email to create or restart your membership.</p>

                    <div>
                        <div className=''>
                            <input type='text' placeholder='Email address' className='w-full py-2.5 pl-2 rounded-sm text-grey'/>
                        </div>
                        <button className='flex justify-between text-white my-auto mx-auto bg-[#E50914] rounded-sm mt-4 px-2 py-2'>
                            <p className='my-auto text-md px-1 font-semibold'>Get Started</p>
                            <FontAwesomeIcon icon={faChevronRight} className='my-auto px-1 text-sm font-light'/>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}



