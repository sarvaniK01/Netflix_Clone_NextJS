
import styles from '../styles/Home.module.css'

export default function Div2(){
    return(
        <div>
            <section className="bg-[#000000] pt-10 px-5">
                {/* HEADLINE */}
                <div className="text-white text-center">
                    <h1 className="font-bold text-[1.7rem]">Enjoy on your TV.</h1>
                    <p className="text-[1.2rem] pt-3 font-semibold">Watch on smart TVs, PlayStation, Xbox,Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                {/* TV with Video */}
                <div className="pb-10">
                    <img src="/netflix_tv.png"/>
                    <div className={styles.videoContainer}>
                        <video autoPlay loop className="w-full">
                            <source src="/netflix_tv_video.m4v"  type="video/mp4"></source>
                        </video>
                    </div>
                </div>
            </section>
        </div>
    )
}