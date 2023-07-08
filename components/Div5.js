import styles from '../styles/Home.module.css'

export default function Div5() {
    return(
        <section className='bg-black py-20 px-5 flex font-nunito'>
            {/* IMAGE */}
            <div>
                <img src='/div5_img.png' alt='children_image'/>
            </div>
            {/* CONTENT */}
            <div className='text-white w-[50%] text-center my-auto'>
                <h1 className='font-black text-5xl text-left'>Create profiles for kids</h1>
                <p className='text-2xl pt-6 font-semibold text-left'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>

            
        </section>
    )
}


