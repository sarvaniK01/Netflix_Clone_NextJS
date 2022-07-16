export default function Div3() {
    return(
        <section className="bg-black py-10 px-5">
            {/* CONTENT */}
            <div className="text-white text-center">
                <h1 className="text-[1.7rem] font-bold">Download your shows to watch offline.</h1>
                <p className="text-[1.2rem]">Save your favourites easily and always have something to watch.</p>
            </div>

            {/* IMAGE */}
            <div className="">
                <img src="/div3_big_img.jpg"/>
                <div className="absolute bg-black flex border-2 border-[#48494B] rounded-md bottom-[-209%] left-[10%] gap-6">
                    <img src="/div3_small_img.png" className=" h-16 p-1"/>
                    <div className="text-center my-auto">
                        <p className="text-white font-semibold text-[0.9rem]">Stranger Things</p>
                        <p className="text-[#0068DC] text-sm">Downloading...</p>
                    </div>
                    <img src="/div3_gif.gif" className="h-14"/>
                </div>
            </div>
        </section>
    )
}