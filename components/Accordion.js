import { useState } from 'react'

import PlusIcon from '../public/plus_icon.svg'
import CloseIcon from '../public/cross_icon.svg'


const Accordion = ({title, description}) => {
    
    const [expanded, setExpanded] = useState(false);
    
    return(
        <div onClick={() => setExpanded(!expanded)} className='bg-white/20 cursor-pointer'>
            {/* TITLE */}
            <div className={`flex justify-between my-auto hover:bg-white/30 ${expanded ? "transition-all duration-1000 ease-in-out" : ""} `}>
                <h1 className="text-white my-auto px-6 lg:py-7 font-semibold text-lg lg:text-2xl">{title}</h1>
                <div>
                    <div className = 'px-5 py-9 lg:py-5 text-3xl lg:text-5xl text-white'>
                        {expanded ? 'x' : '+'}
                    </div>
                </div> 
            </div>
            
            {/* DESCRIPTION */}
            <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${expanded ? "max-h-100 " : "max-h-0 " }`}>
                <div className='bg-black w-full h-0.5'></div>
                <p className='text-white lg:text-2xl px-7 py-7 '>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Accordion;



