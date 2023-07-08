import styles from '../styles/Home.module.css'

export default function Div4() {
    return(
        <section className="bg-black text-center pl-8 pr-5 pt-20 pb-20 flex font-nunito">
            {/* CONTENT */}
            <div className="text-white w-[50%] text-center my-auto">
                <h1 className="font-black text-5xl text-left">Watch everywhere.</h1>
                <p className="text-2xl pt-6 font-semibold text-left">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>

            {/* IMAGE */}
            <div className="pt-3 relative">
                <img src="/div4_img.png" className="div4Img"/>

                <div className='videoContainer2'>
                    <video autoPlay muted loop>
                        <source src="/div3_video.m4v" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    )
}