import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; 

const Footer  = () => {
    return(
        <section className="text-white/70 bg-black px-10 py-20 font-nunito">
            <h1 className="text-md">Questions? Call <span className="underline">000-800-040-1843</span></h1>
            <div className="grid grid-cols-2 md:grid-cols-3 py-5 underline gap-y-3 text-md">
                <p className="   cursor-pointer">FAQ</p>
                <p className="       cursor-pointer">Help Centre</p>
                <p className="     cursor-pointer">Account</p>
                <p className="       cursor-pointer">Media Center</p>
                <p className="       cursor-pointer">Investor Relations</p>
                <p className="       cursor-pointer">Jobs</p>
                <p className="       cursor-pointer">Ways to Watch</p>
                <p className="       cursor-pointer">Terms of Use</p>
                <p className="       cursor-pointer">Privacy</p>
                <p className="       cursor-pointer pr-3">Cookie Preferences</p>
                <p className="       cursor-pointer">Corporate Information</p>
                <p className="       cursor-pointer">Contact Us</p>
                <p className="       cursor-pointer">Speed Test</p>
                <p className="       cursor-pointer">Legal Notices</p>
                <p className="       cursor-pointer">Only on Netflix</p>
            </div>

            <button className='flex text-white gap-x-2 my-auto border border-white/40 px-2 py-1 rounded-md'>
                <FontAwesomeIcon icon={faGlobe} className='my-auto'></FontAwesomeIcon>
                <p className='text-md px-1 font-semibold my-auto'>English</p>
                <FontAwesomeIcon icon={faCaretDown} className='my-auto'></FontAwesomeIcon>
            </button>

            <h1 className="pt-5">Netflix India</h1>
        </section>
    )
}

export default Footer