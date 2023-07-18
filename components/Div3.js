export default function Div3() {
    return(
        <section className="bg-black py-10 px-5 flex-start flex flex-col lg:flex-row lg:flex-row-reverse 2xl:justify-center pt-20 pb-20 font-nunito">
            {/* CONTENT */}
            <div className="text-white  lg:w-[50%] text-center my-auto 2xl:mx-0 2xl:w-[30%]">
                <h1 className="font-black text-3xl lg:text-5xl lg:text-left">Download your shows to watch offline</h1>
                <p className="text-lg lg:text-2xl pt-6 font-semibold lg:text-left">Save your favourites easily and always have something to watch.</p>
            </div>
            {/* IMAGE */}
            <div className="mx-auto 2xl:mx-0">
                <img src="/div3_big_img.jpg"/>
                <div className="videoContainer1 bg-black flex border-2 border-[#48494B] rounded-md gap-6 p-1 md:px-3 md:py-2">
                    <img src="/div3_small_img.png" className="h-14 md:h-16"/>
                    <div className="text-center my-auto">
                        <p className="text-white font-semibold text-sm md:text-md text-left">Stranger Things</p>
                        <p className="text-[#0068DC] text-sm md:text-sm text-left">Downloading...</p>
                    </div>
                    <img src="/div3_gif.gif" className="h-12 md:h-14"/>
                </div>
            </div>
        </section>
    )
}