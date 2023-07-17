import styles from '../styles/Home.module.css'

export default function Div5() {
    return(
        <section className='bg-black py-20 px-5 flex flex-col lg:flex-row lg:flex-row-reverse font-nunito'>
            {/* CONTENT */}
            <div className='text-white lg:w-[50%] text-center my-auto'>
                <h1 className='font-black text-3xl lg:text-5xl lg:text-left'>Create profiles for kids</h1>
                <p className='text-lg lg:text-2xl pt-6 font-semibold lg:text-left'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
            {/* IMAGE */}
            <div className='pt-10 lg:pt-5'>
                <img src='/div5_img.png' alt='children_image'/>
            </div>
        </section>
    )
}


