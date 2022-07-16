import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; 

const Footer  = () => {
    return(
        <section className="text-[#48494B] bg-black px-5 py-10">
            <h1>Questions? Call 000-800-040-1843</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 py-5">
                <p className="pb-2 text-sm hover:underline cursor-pointer">FAQ</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer">Help Centre</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer">Account</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer">Media Centre</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer">Investor Relations</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer">Jobs</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer">Ways to Watch</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer">Terms of Use</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer">Privacy</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer">Cookie Preferences</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer pr-3">Corporate Information</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer">Contact Us</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer">Speed Test</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer">Legal Notices</p>
                <p className="pb-2 text-sm hover:underline cursor-pointer">Only on Netflix</p>
            </div>

            <button className='flex text-white my-auto border-white border-[1px] border-opacity-70 px-1 py-1 rounded-sm'>
                <FontAwesomeIcon icon={faGlobe} className='my-auto'></FontAwesomeIcon>
                <p className='text-sm px-1'>English</p>
                <FontAwesomeIcon icon={faCaretDown} className='my-auto'></FontAwesomeIcon>
            </button>

            <h1 className="pt-5">Netflix India</h1>
        </section>
    )
}

export default Footer