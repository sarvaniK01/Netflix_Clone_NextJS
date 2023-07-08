
import styles from '../styles/Home.module.css'

export default function Div2(){
    return(
        <div className='font-nunito'>
            <section className="bg-[#000000] pt-10 pl-8 pr-5 flex py-20">
                {/* HEADLINE */}
                <div className="text-white text-center my-auto w-[50%]">
                    <h1 className="font-black text-5xl text-left">Enjoy on your TV.</h1>
                    <p className="text-2xl pt-5 font-semibold text-left">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
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