export default function Div3() {
    return(
        <section className="bg-black py-10 px-5 flex flex-start pt-20 pb-20 font-nunito">
            {/* IMAGE */}
            <div className="">
                <img src="/div3_big_img.jpg"/>
                <div className="absolute bg-black flex border-2 border-[#48494B] rounded-md left-[12.5%] bottom-[-210%] gap-6 px-3 py-2">
                    <img src="/div3_small_img.png" className=" h-16 "/>
                    <div className="text-center my-auto">
                        <p className="text-white font-semibold text-md text-left">Stranger Things</p>
                        <p className="text-[#0068DC] text-sm text-left">Downloading...</p>
                    </div>
                    <img src="/div3_gif.gif" className="h-14"/>
                </div>
            </div>
            {/* CONTENT */}
            <div className="text-white w-[50%] text-center my-auto">
                <h1 className="font-black text-5xl text-left">Download your shows to watch offline</h1>
                <p className="text-2xl pt-6 font-semibold text-left">Save your favourites easily and always have something to watch.</p>
            </div>

            
        </section>
    )
}