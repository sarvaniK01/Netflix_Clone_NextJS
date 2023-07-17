import Accordion from "./Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function FaqSection(){
    return(
        <section className="bg-black py-10 font-nunito">
            <h1 className="px-5 text-center font-black text-white text-3xl lg:text-5xl">Frequently Asked Questions</h1>

            {/* FAQ Div */}
            <div className="mx-7 lg:mx-14 my-10">
                <Accordion 
                    title='What is Netflix?' 
                    description="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week!" 
                />
                <div className="bg-black w-full h-2"></div>

                <Accordion 
                    title="How much does Netflix cost?" 
                    description="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
                />
                <div className="bg-black w-full h-2"></div>

                <Accordion 
                    title="Where can I watch?" 
                    description="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
                />
                <div className="bg-black w-full h-2"></div>

                <Accordion 
                    title="How do I cancel?" 
                    description="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
                />
                <div className="bg-black w-full h-2"></div>

                <Accordion 
                    title="What can I watch on Netflix?" 
                    description="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
                />
                <div className="bg-black w-full h-2"></div>

                <Accordion 
                    title="Is Netflix good for kids?" 
                    description="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
                />
            </div>
            

            <div className='mt-12'>
                <p className='text-white text-center my-3 mx-3 text-md lg:text-xl font-semibold'>Ready to watch? Enter your email to create or restart your membership.</p>

                <div className='flex flex-col lg:flex-row gap-x-2 mx-auto justify-center'>
                    <div className='mt-auto w-[70%] mx-auto lg:mx-0 lg:w-[36%]'>
                        <input type='text' placeholder='Email address' className=' py-4 pl-4 rounded-sm text-white font-semibold bg-[#1c2432] w-[100%] border border-[#25915e]'/>
                    </div>
                    <button className='flex text-white bg-[#E50914] rounded-sm mx-auto lg:mx-0 mt-4 px-5 py-3 hover:bg-[#E50914]/80 hover:linear hover:duration-200'>
                        <p className='text-lg lg:text-2xl font-bold'>Get Started</p>
                        <FontAwesomeIcon icon={faChevronRight} className='my-auto px-1 text-sm font-light'/>
                    </button>
                </div>
            </div>

        </section>
    )
}