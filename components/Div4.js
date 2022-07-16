import styles from '../styles/Home.module.css'

export default function Div4() {
    return(
        <section className="bg-black text-center px-5 pt-10 pb-10">
            {/* CONTENT */}
            <div className="text-white">
                <h1 className="text-[1.7rem] font-bold">Watch everywhere.</h1>
                <p className="text-[1.2rem]">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>

            {/* IMAGE */}
            <div className="pt-3">
                <img src="/div4_img.png" className={styles.div4Img}/>

                <div>
                    <video autoPlay loop className={styles.div4Video}>
                        <source src="/div3_video.m4v" type="video/mp4" ></source>
                    </video>
                </div>
            </div>
        </section>
    )
}