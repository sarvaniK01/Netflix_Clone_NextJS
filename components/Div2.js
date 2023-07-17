
import styles from '../styles/Home.module.css'

export default function Div2(){
    return(
        <div className='font-nunito'>
            <section className="bg-[#000000] pt-10 lg:pl-8 lg:pr-5 flex flex-col lg:flex-row py-20">
                {/* HEADLINE */}
                <div className="text-white text-center my-auto lg:w-[50%] mx-5 md:mx-20">
                    <h1 className="font-black text-3xl md:text-5xl text-center lg:text-left">Enjoy on your TV.</h1>
                    <p className="text-lg lg:text-2xl pt-5 font-semibold text-center lg:text-left">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                {/* TV with Video */}
                <div className="pb-10 relative">
                    <img src="/netflix_tv.png" className='w-full h-full relative'/>
                    <div className="videoContainer">
                        {/* <video autoPlay loop>
                            <source src="/netflix_tv_video.m4v"  type="video/mp4"></source>
                        </video> */}
                        <video autoPlay muted>
                            <source src="/netflix_tv_video.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
        </div>
    )
}