import { useState } from 'react'

import PlusIcon from '../public/plus_icon.svg'
import CloseIcon from '../public/cross_icon.svg'


const Accordion = ({title, description}) => {
    
    const [expanded, setExpanded] = useState(false);
    
    return(
        <div onClick={() => setExpanded(!expanded)} className='bg-[#48494B]'>
            {/* TITLE */}
            <div className='flex justify-between my-auto'>
                <h1 className="text-white my-auto px-5 font-semibold text-[1.1rem]">{title}</h1>
                <div>
                    <div className = 'px-2 text-[2rem] text-white transition-max-height ease-in-out duration-700 '>
                        {expanded ? 'x' : '+'}
                    </div>
                </div> 
            </div>
            
            {/* DESCRIPTION */}
            <div className={`transition-max-height ease-in-out duration-700 overflow-hidden ${expanded ? "max-h-100" : "max-h-0" }`}>
                <div className='bg-black w-full h-0.5'></div>
                <p className='font-semibold text-white px-5 py-2'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Accordion;



